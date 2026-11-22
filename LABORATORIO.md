# Laboratorio de simuladores — OVA Sistemas Operativos

## Objetivo

Centralizar el acceso a los simuladores recibidos de los dos grupos sin homogeneizar ni reconstruir sus interfaces. La navegación del OVA permite encontrar los recursos por el nombre propio de cada simulador, independientemente del nombre de la carpeta de entrega o de la persona que lo elaboró.

## Accesos

- Portal principal: `index.html#laboratorios`
- Página del módulo: `laboratorio/index.html`
- Aula de aprendizaje: botón **Laboratorio** en la barra superior.

## Simuladores disponibles

Los simuladores locales se distribuyen como páginas HTML autónomas comprimidas en `laboratorio/payloads/`. El visor del módulo descomprime cada documento en el navegador y lo presenta sin rehacer el contenido, los controles ni el diseño. Los nombres se ordenan alfabéticamente al construir la lista.

| Simulador | Modalidad |
|---|---|
| CPU Arena | Página original integrada localmente |
| Deadlock Hunter | Página original integrada localmente |
| DiskLab — Simulador de errores en discos | Página original integrada localmente |
| DiskSim Pro — Laboratorio Experimental de Planificación de E/S | Página original integrada localmente |
| Grafos y Avestruz — Grafos de Asignación de Recursos y Algoritmo del Avestruz | Página original integrada localmente |
| IO/LAB — Laboratorio de Entrada, Salida y Discos | Página original integrada localmente |
| IPC Messenger | Sitio publicado del proyecto; se abre en una pestaña nueva |
| SIM-01 — Simulador embebido | Sitio publicado del proyecto; se abre en una pestaña nueva |
| Simulador de bloqueos · Algoritmo del banquero | Página original integrada localmente |
| Simulador de bloqueos — Condiciones de Coffman | Página original integrada localmente |
| Simulador de planificación del brazo del disco | Página original integrada localmente |

## Material que aún no está habilitado

- **I/O Simulator — Simulador de Periféricos & Interrupciones:** se recibió el código fuente React/Vite, pero no una compilación estática lista para Pages. Debe ejecutarse el proceso de construcción y verificarse antes de habilitar el enlace.
- **SyncWatch:** el paquete recibido contiene el informe PDF; no incluye aplicación ni archivos fuente ejecutables.

## Integridad y verificación

- Los simuladores locales se incorporan a partir de su HTML original. En los casos en que HTML, CSS y JavaScript estaban separados, los recursos se agruparon en una página autónoma manteniendo el orden y el contenido de los archivos originales.
- El diseño individual no se sustituyó por una plantilla común. El módulo Laboratorio aporta únicamente el catálogo, la búsqueda, el orden alfabético y el visor de apertura.
- Los dos simuladores con sitio público se mantienen en su dirección de publicación original.
- Se validó localmente la decodificación gzip/base64 de los nueve paquetes HTML y la sintaxis JavaScript de los scripts extraídos.
- Quedan pendientes pruebas manuales completas de interacción y navegadores reales.
