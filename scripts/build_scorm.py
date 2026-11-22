#!/usr/bin/env python3
"""Build a Moodle-compatible SCORM 1.2 ZIP from the OVA repository."""
from __future__ import annotations

import shutil
import sys
import zipfile
from pathlib import Path
from urllib.parse import quote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
BUILD_ROOT = DIST / "_scorm_build"
PACKAGE_DIR = BUILD_ROOT / "OVA-Sistemas-Operativos-SCORM-1.2"
OUTPUT = DIST / "OVA-Sistemas-Operativos-SCORM-1.2.zip"

IMS_NS = "http://www.imsproject.org/xsd/imscp_rootv1p1p2"
ADLCP_NS = "http://www.adlnet.org/xsd/adlcp_rootv1p2"
XSI_NS = "http://www.w3.org/2001/XMLSchema-instance"

ET.register_namespace("", IMS_NS)
ET.register_namespace("adlcp", ADLCP_NS)
ET.register_namespace("xsi", XSI_NS)


def qname(namespace: str, tag: str) -> str:
    return f"{{{namespace}}}{tag}"


def should_ignore(directory: str, names: list[str]) -> set[str]:
    ignored = {".git", ".github", "dist", "scripts", "__pycache__", ".pytest_cache", "node_modules"}
    return {name for name in names if name in ignored or name.endswith(".pyc") or name == ".DS_Store"}


def copy_course_files() -> list[Path]:
    if BUILD_ROOT.exists():
        shutil.rmtree(BUILD_ROOT)
    PACKAGE_DIR.mkdir(parents=True, exist_ok=True)

    for item in ROOT.iterdir():
        if item.name in {".git", ".github", "dist", "scripts", "__pycache__", "node_modules"}:
            continue
        if item.name == ".DS_Store" or item.suffix == ".pyc":
            continue
        destination = PACKAGE_DIR / item.name
        if item.is_dir():
            shutil.copytree(item, destination, ignore=should_ignore)
        elif item.is_file() and item.name != "imsmanifest.xml":
            shutil.copy2(item, destination)

    required = [
        "index.html",
        "aula.html",
        "scorm-launcher.html",
        "scorm-bridge.js",
        "js/app.js",
        "temas/tema1/OVA_corte1.html",
        "temas/tema2/OVA_corte2.html",
    ]
    missing = [name for name in required if not (PACKAGE_DIR / name).is_file()]
    if missing:
        raise FileNotFoundError("Missing required OVA files: " + ", ".join(missing))

    files = sorted(
        path for path in PACKAGE_DIR.rglob("*")
        if path.is_file() and path.name != "imsmanifest.xml"
    )
    if not files:
        raise RuntimeError("The SCORM package contains no content files.")
    return files


def build_manifest(files: list[Path]) -> None:
    manifest = ET.Element(
        qname(IMS_NS, "manifest"),
        {
            "identifier": "OVA-SISTEMAS-OPERATIVOS-SCORM12",
            "version": "1.0",
            qname(XSI_NS, "schemaLocation"): (
                f"{IMS_NS} http://www.imsglobal.org/xsd/ims_cp_rootv1p1p2.xsd "
                f"{ADLCP_NS} http://www.adlnet.org/xsd/adlcp_rootv1p2.xsd"
            ),
        },
    )

    metadata = ET.SubElement(manifest, qname(IMS_NS, "metadata"))
    ET.SubElement(metadata, qname(IMS_NS, "schema")).text = "ADL SCORM"
    ET.SubElement(metadata, qname(IMS_NS, "schemaversion")).text = "1.2"

    organizations = ET.SubElement(
        manifest, qname(IMS_NS, "organizations"), {"default": "ORG-SISTEMAS-OPERATIVOS"}
    )
    organization = ET.SubElement(
        organizations, qname(IMS_NS, "organization"),
        {"identifier": "ORG-SISTEMAS-OPERATIVOS", "structure": "hierarchical"}
    )
    ET.SubElement(organization, qname(IMS_NS, "title")).text = (
        "Sistemas Operativos — Universidad Simón Bolívar"
    )
    item = ET.SubElement(
        organization, qname(IMS_NS, "item"),
        {
            "identifier": "ITEM-SISTEMAS-OPERATIVOS",
            "identifierref": "RES-SISTEMAS-OPERATIVOS",
            "isvisible": "true",
        },
    )
    ET.SubElement(item, qname(IMS_NS, "title")).text = "OVA Sistemas Operativos"

    resources = ET.SubElement(manifest, qname(IMS_NS, "resources"))
    resource = ET.SubElement(
        resources,
        qname(IMS_NS, "resource"),
        {
            "identifier": "RES-SISTEMAS-OPERATIVOS",
            "type": "webcontent",
            qname(ADLCP_NS, "scormtype"): "sco",
            "href": "scorm-launcher.html",
        },
    )

    for path in files:
        relative = path.relative_to(PACKAGE_DIR).as_posix()
        href = quote(relative, safe="/-._~")
        ET.SubElement(resource, qname(IMS_NS, "file"), {"href": href})

    tree = ET.ElementTree(manifest)
    ET.indent(tree, space="  ")
    tree.write(PACKAGE_DIR / "imsmanifest.xml", encoding="utf-8", xml_declaration=True)


def create_zip() -> tuple[int, int]:
    files = copy_course_files()
    build_manifest(files)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    if OUTPUT.exists():
        OUTPUT.unlink()

    with zipfile.ZipFile(OUTPUT, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
        for path in sorted(PACKAGE_DIR.rglob("*")):
            if path.is_file():
                archive.write(path, path.relative_to(PACKAGE_DIR).as_posix())

    with zipfile.ZipFile(OUTPUT, "r") as archive:
        names = archive.namelist()
        if "imsmanifest.xml" not in names:
            raise RuntimeError("imsmanifest.xml is not at the ZIP root.")
        manifest = ET.fromstring(archive.read("imsmanifest.xml"))
        resource = manifest.find(f".//{qname(IMS_NS, 'resource')}")
        if resource is None or resource.attrib.get("href") != "scorm-launcher.html":
            raise RuntimeError("SCORM manifest launch resource is invalid.")
        if "scorm-launcher.html" not in names or "scorm-bridge.js" not in names:
            raise RuntimeError("SCORM launch files are missing.")

    return len(files) + 1, OUTPUT.stat().st_size


if __name__ == "__main__":
    count, size = create_zip()
    print(f"SCORM package created: {OUTPUT}")
    print(f"Files in package (including manifest): {count}")
    print(f"ZIP size: {size:,} bytes")
