const unidades = [
  {
    id: "tema1",
    titulo: { es: "Memoria virtual", en: "Virtual memory" },
    autor: "Nombre del autor",
    ruta: "temas/tema1/index.html",
    icono: "01"
  },
  {
    id: "tema2",
    titulo: { es: "Procesos y planificación", en: "Processes & scheduling" },
    autor: "Nombre del autor",
    ruta: "temas/tema2/index.html",
    icono: "02"
  },
  {
    id: "tema3",
    titulo: { es: "Sistemas de archivos", en: "File systems" },
    autor: "Nombre del autor",
    ruta: "temas/tema3/index.html",
    icono: "03"
  }
];

const iconosUnidad = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 9v11"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/><circle cx="18" cy="17" r="2"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/></svg>'
];

const traducciones = {
  es: {
    brandSubtitle: "kernel_learning // universidad simón bolívar",
    globalProgress: "PROGRESO GLOBAL",
    inProgress: "EN CURSO",
    completed: "COMPLETADO",
    learningPath: "RUTA DE APRENDIZAJE",
    unitWord: "Unidad",
    stepBadge: "Paso 1",
    badgeStep: "PASO 1 • REQUISITO INICIAL OBLIGATORIO",
    title: "Memoria virtual",
    descripcion:
      "Comprende cómo el sistema operativo <strong>abstrae la memoria física</strong> y administra la <em>paginación</em>, los <em>fallos de página</em> y el <strong>espacio de intercambio</strong> para ejecutar procesos de forma segura y eficiente.",
    moduleProgress: "PROGRESO DEL MÓDULO",
    respondidas: "Respondidas: {n} de {total}",
    tab: "Memoria virtual",
    readerLabel: "OVA :: LECTURA",
    closeLabel: "Cerrar"
  },
  en: {
    brandSubtitle: "kernel_learning // simon bolivar university",
    globalProgress: "GLOBAL PROGRESS",
    inProgress: "IN PROGRESS",
    completed: "COMPLETED",
    learningPath: "LEARNING PATH",
    unitWord: "Unit",
    stepBadge: "Step 1",
    badgeStep: "STEP 1 • MANDATORY INITIAL REQUIREMENT",
    title: "Virtual memory",
    descripcion:
      "Understand how the operating system <strong>abstracts physical memory</strong> and manages <em>paging</em>, <em>page faults</em> and <strong>swap space</strong> to run processes safely and efficiently.",
    moduleProgress: "MODULE PROGRESS",
    respondidas: "Answered: {n} of {total}",
    tab: "Virtual memory",
    readerLabel: "OVA :: READ",
    closeLabel: "Close"
  }
};

const preguntas = [
  {
    id: 1,
    correcta: 0,
    es: {
      titulo: "¿Qué describe mejor a la memoria virtual?",
      opciones: [
        "Una abstracción que da a cada proceso su propio espacio de direcciones.",
        "Un módulo físico de RAM que se instala en la placa base.",
        "Un sistema de archivos especializado en guardar documentos."
      ]
    },
    en: {
      titulo: "Which best describes virtual memory?",
      opciones: [
        "An abstraction that gives each process its own address space.",
        "A physical RAM module installed on the motherboard.",
        "A file system specialized in storing documents."
      ]
    }
  },
  {
    id: 2,
    correcta: 0,
    es: {
      titulo: "¿Cómo se denomina el bloque de tamaño fijo en que se divide la memoria virtual?",
      opciones: ["Página.", "Sector.", "Inodo."]
    },
    en: {
      titulo: "What is the fixed-size block that virtual memory is divided into called?",
      opciones: ["Page.", "Sector.", "Inode."]
    }
  },
  {
    id: 3,
    correcta: 0,
    es: {
      titulo: "¿Qué ocurre cuando un proceso accede a una página que no está cargada en la RAM?",
      opciones: [
        "Se produce un fallo de página.",
        "El proceso se reinicia automáticamente.",
        "Se borra la tabla de páginas."
      ]
    },
    en: {
      titulo: "What happens when a process accesses a page that is not loaded in RAM?",
      opciones: [
        "A page fault occurs.",
        "The process restarts automatically.",
        "The page table is erased."
      ]
    }
  },
  {
    id: 4,
    correcta: 0,
    es: {
      titulo: "¿Cuál es la función principal de la MMU?",
      opciones: [
        "Traducir direcciones virtuales a direcciones físicas.",
        "Ejecutar las operaciones aritméticas de la CPU.",
        "Administrar los permisos de los archivos."
      ]
    },
    en: {
      titulo: "What is the main function of the MMU?",
      opciones: [
        "Translate virtual addresses into physical addresses.",
        "Execute the CPU's arithmetic operations.",
        "Manage file permissions."
      ]
    }
  },
  {
    id: 5,
    correcta: 0,
    es: {
      titulo: "¿Qué hace un algoritmo de reemplazo de páginas?",
      opciones: [
        "Elige qué página expulsar de la RAM cuando falta espacio.",
        "Formatea el disco de intercambio cada ciclo.",
        "Asigna prioridad a los procesos en la CPU."
      ]
    },
    en: {
      titulo: "What does a page replacement algorithm do?",
      opciones: [
        "Chooses which page to evict from RAM when space runs out.",
        "Formats the swap disk on every cycle.",
        "Assigns priority to processes on the CPU."
      ]
    }
  },
  {
    id: 6,
    correcta: 0,
    es: {
      titulo: "¿Qué describe el fenómeno del thrashing?",
      opciones: [
        "El sistema pasa más tiempo paginando que ejecutando procesos.",
        "La memoria caché se llena de datos temporales.",
        "Un proceso bloquea la tabla de páginas."
      ]
    },
    en: {
      titulo: "What does the thrashing phenomenon describe?",
      opciones: [
        "The system spends more time paging than executing processes.",
        "The cache memory fills up with temporary data.",
        "A process locks the page table."
      ]
    }
  },
  {
    id: 7,
    correcta: 0,
    es: {
      titulo: "¿Para qué se utiliza el área de intercambio (swap)?",
      opciones: [
        "Para mover páginas fuera de la RAM y liberar memoria física.",
        "Para acelerar la caché interna de la CPU.",
        "Para almacenar el registro de arranque."
      ]
    },
    en: {
      titulo: "What is the swap area used for?",
      opciones: [
        "To move pages out of RAM and free physical memory.",
        "To speed up the CPU's internal cache.",
        "To store the boot record."
      ]
    }
  },
  {
    id: 8,
    correcta: 0,
    es: {
      titulo: "¿Dónde se guardan las traducciones entre páginas virtuales y marcos físicos?",
      opciones: ["En la tabla de páginas.", "En el registro de instrucción.", "En el directorio raíz."]
    },
    en: {
      titulo: "Where are the translations between virtual pages and physical frames stored?",
      opciones: ["In the page table.", "In the instruction register.", "In the root directory."]
    }
  },
  {
    id: 9,
    correcta: 0,
    es: {
      titulo: "¿Cuál es una ventaja clave de la memoria virtual?",
      opciones: [
        "Aísla los procesos y permite usar más memoria que la RAM disponible.",
        "Elimina por completo la necesidad de disco.",
        "Duplica la velocidad del procesador."
      ]
    },
    en: {
      titulo: "What is a key advantage of virtual memory?",
      opciones: [
        "It isolates processes and allows using more memory than available RAM.",
        "It completely removes the need for a disk.",
        "It doubles the processor's speed."
      ]
    }
  }
];

const preguntasEl = document.getElementById("preguntas");
const contadorRespondidas = document.getElementById("contadorRespondidas");
const barraModulo = document.getElementById("barraModulo");
const barraGlobal = document.getElementById("barraGlobal");
const pctGlobal = document.getElementById("pctGlobal");
const badgeGlobal = document.getElementById("badgeGlobal");
const rutaLista = document.getElementById("rutaLista");
const botonesIdioma = document.querySelectorAll(".idioma__opcion");
const accionGlobal = document.getElementById("accionGlobal");
const marca = document.getElementById("marca");
const lector = document.getElementById("lector");
const lectorTitulo = document.getElementById("lectorTitulo");
const lectorFrame = document.getElementById("lectorFrame");
const lectorCerrar = document.getElementById("lectorCerrar");
const descripcion = document.getElementById("descripcion");

let idioma = "es";
const respuestas = {};

function t(clave) {
  return traducciones[idioma][clave] ?? clave;
}

function estadoPregunta(article, pregunta, valor) {
  if (valor === undefined) return;

  const acierto = Number(valor) === pregunta.correcta;
  article.classList.toggle("pregunta--correcta", acierto);
  article.classList.toggle("pregunta--incorrecta", !acierto);

  const opciones = article.querySelectorAll(".opcion");
  opciones.forEach((opcion, indice) => {
    opcion.classList.remove("opcion--correcta", "opcion--incorrecta");
    if (indice === pregunta.correcta) opcion.classList.add("opcion--correcta");
    else if (indice === Number(valor)) opcion.classList.add("opcion--incorrecta");
  });
}

function renderPreguntas() {
  preguntasEl.innerHTML = "";

  preguntas.forEach((pregunta) => {
    const data = pregunta[idioma];
    const article = document.createElement("article");
    article.className = "pregunta";

    const pestana = document.createElement("span");
    pestana.className = "pregunta__pestana";
    pestana.textContent = `${t("tab")} · Q${String(pregunta.id).padStart(2, "0")}`;

    const titulo = document.createElement("h3");
    titulo.className = "pregunta__texto";
    titulo.textContent = data.titulo;

    const opciones = document.createElement("div");
    opciones.className = "opciones";

    data.opciones.forEach((texto, indice) => {
      const label = document.createElement("label");
      label.className = "opcion";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "pregunta-" + pregunta.id;
      input.value = String(indice);
      input.checked = respuestas[pregunta.id] === String(indice);

      const marcaOpcion = document.createElement("span");
      marcaOpcion.className = "opcion__marca";

      const textoOpcion = document.createElement("span");
      textoOpcion.className = "opcion__texto";
      textoOpcion.textContent = texto;

      label.append(input, marcaOpcion, textoOpcion);
      opciones.append(label);

      input.addEventListener("change", () => {
        respuestas[pregunta.id] = input.value;
        estadoPregunta(article, pregunta, input.value);
        actualizarProgreso();
      });
    });

    article.append(pestana, titulo, opciones);
    preguntasEl.append(article);

    if (respuestas[pregunta.id] !== undefined) {
      estadoPregunta(article, pregunta, respuestas[pregunta.id]);
    }
  });
}

function actualizarProgreso() {
  const total = preguntas.length;
  const respondidas = Object.keys(respuestas).length;
  const porcentaje = Math.round((respondidas / total) * 100);

  contadorRespondidas.textContent = t("respondidas")
    .replace("{n}", respondidas)
    .replace("{total}", total);

  barraModulo.style.width = porcentaje + "%";
  barraGlobal.style.width = porcentaje + "%";
  pctGlobal.textContent = porcentaje + "%";

  const completado = respondidas === total;
  badgeGlobal.textContent = completado ? t("completed") : t("inProgress");
  badgeGlobal.classList.toggle("completado", completado);
}

function renderRuta() {
  rutaLista.innerHTML = "";

  unidades.forEach((unidad, indice) => {
    const activo = indice === 0;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "modulo " + (activo ? "modulo--activo" : "modulo--disponible");
    boton.setAttribute(
      "aria-label",
      `${t("unitWord")} ${unidad.icono}: ${unidad.titulo[idioma]}`
    );
    if (activo) boton.setAttribute("aria-current", "step");

    const icono = document.createElement("span");
    icono.className = "modulo__icono";
    icono.innerHTML = iconosUnidad[indice % iconosUnidad.length];

    const texto = document.createElement("span");
    texto.className = "modulo__texto";

    const titulo = document.createElement("strong");
    titulo.textContent = unidad.titulo[idioma];

    const detalle = document.createElement("small");
    detalle.textContent = `${t("unitWord")} ${unidad.icono}`;

    texto.append(titulo, detalle);

    const marcaLateral = document.createElement("span");
    if (activo) {
      marcaLateral.className = "modulo__paso";
      marcaLateral.textContent = t("stepBadge");
    } else {
      marcaLateral.className = "modulo__flecha";
      marcaLateral.textContent = "↗";
      marcaLateral.setAttribute("aria-hidden", "true");
    }

    boton.append(icono, texto, marcaLateral);
    boton.addEventListener("click", () => abrirLector(unidad));
    rutaLista.append(boton);
  });
}

function aplicarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (traducciones[idioma][clave] !== undefined) {
      el.textContent = traducciones[idioma][clave];
    }
  });

  descripcion.innerHTML = t("descripcion");

  botonesIdioma.forEach((boton) => {
    const activo = boton.getAttribute("data-lang") === idioma;
    boton.classList.toggle("activo", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  renderRuta();
  renderPreguntas();
  actualizarProgreso();
}

function avisarTemaAlFrame() {
  if (lectorFrame.contentWindow) {
    lectorFrame.contentWindow.postMessage({ tipo: "ovaTema", tema: "dark" }, "*");
  }
}

function abrirLector(unidad) {
  lectorTitulo.textContent = unidad.titulo[idioma];
  lectorFrame.src = unidad.ruta;
  lector.hidden = false;
  document.body.style.overflow = "hidden";
  lectorCerrar.focus();
}

function cerrarLector() {
  lector.hidden = true;
  lectorFrame.src = "about:blank";
  document.body.style.overflow = "";
}

botonesIdioma.forEach((boton) => {
  boton.addEventListener("click", () => {
    const seleccionado = boton.getAttribute("data-lang");
    if (seleccionado !== idioma) aplicarIdioma(seleccionado);
  });
});

accionGlobal.addEventListener("click", () => {
  const primera = preguntasEl.querySelector(".pregunta");
  if (primera) primera.scrollIntoView({ behavior: "smooth", block: "center" });
});

marca.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

lectorCerrar.addEventListener("click", cerrarLector);
lectorFrame.addEventListener("load", avisarTemaAlFrame);
lector.addEventListener("click", (e) => {
  if (e.target === lector) cerrarLector();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lector.hidden) cerrarLector();
});

try {
  localStorage.setItem("ovaTema", "dark");
} catch (e) {}

document.getElementById("anio").textContent = new Date().getFullYear();

aplicarIdioma("es");
