# OVA Sistemas Operativos — Universidad Simón Bolívar

Portal del Objeto Virtual de Aprendizaje del curso Sistemas Operativos (código 9893), Ingeniería de Sistemas, VI semestre.

## Abrir localmente

1. Extraer el ZIP completo conservando la estructura de carpetas.
2. Abrir `index.html` desde un servidor estático local o desde GitHub Pages.
3. No descargar ni abrir `index.html` de forma aislada: requiere `portal.css`, `portal.js`, `aula.html`, `recursos visuales/`, `css/`, `js/` y las carpetas `temas/`.

## Estructura principal

- `index.html`: portal institucional.
- `portal.css` / `portal.js`: estilos, navegación y preferencias del portal.
- `aula.html`: OVA CORE con los tres bloques, preguntas y avance local.
- `temas/tema1/`, `temas/tema2/`, `temas/tema3/`: contenidos y actividades originales de los estudiantes.
- `recursos visuales/`: logos institucionales y recursos gráficos.

## Funciones

- Diseño institucional inspirado en la referencia de la OVA de Modelos, adaptado a Sistemas Operativos.
- Verde oficial `#09843B` y logotipo institucional conservado sin alteraciones.
- Modo claro/oscuro y selector español/inglés en el portal y en el OVA CORE.
- Navegación entre cortes que devuelve el contenedor integrado al encabezado de la unidad.
- Plataforma de evaluación con acceso directo como invitado, sin exigir nombre ni semestre al ingresar.
- Tres bloques diferenciados por color: azul, amarillo y rosa.
- Propósito, objetivos, competencia e información académica del PAC.
- Plan de actividades de 16 semanas conforme al apartado 14 del PAC.
- Pie de página con desarrolladores agrupados por bloque.
- Módulo Laboratorio con acceso centralizado a 11 simuladores disponibles (9 paquetes locales y 2 sitios publicados externos), ordenados alfabéticamente por el nombre de cada simulador.
- Los simuladores locales se cargan como documentos originales en un visor aislado; no se rediseñan sus pantallas ni se sustituyen sus controles.
- Botón Laboratorio disponible desde el portal principal y desde la navegación del aula.

## Preferencias y datos

Las preferencias de apariencia e idioma se guardan localmente mediante `localStorage` (`ovaTema` y `ovaIdioma`). El progreso del estudiante también se almacena localmente en el OVA CORE; no equivale a una plataforma institucional de calificaciones ni sincroniza avances entre diferentes equipos.

Los OVA de los estudiantes mantienen sus interfaces internas y controles originales. Los cambios de idioma/apariencia del portal no reemplazan automáticamente los mecanismos propios de cada módulo. Los simuladores de Laboratorio conservan sus documentos, hojas de estilo y scripts originales; se usa un visor común únicamente para facilitar su acceso.

## Pendientes

- Compilar y validar el proyecto fuente I/O Simulator (React/Vite) antes de habilitar su acceso desde Laboratorio.
- Solicitar el código ejecutable de SyncWatch; el paquete recibido contiene únicamente el informe PDF.
- Completar pruebas manuales de interacción de cada simulador en distintos navegadores y dispositivos.
- Incorporar las URL oficiales de Facebook e Instagram.
- Realizar pruebas manuales completas en navegadores y dispositivos reales.
- Revisar académicamente los talleres, juegos y evaluaciones.
- GitHub Pages está configurado con origen `GitHub Actions`; comprobar que el workflow complete el despliegue.

## Publicación

El repositorio incluye `.github/workflows/deploy-pages.yml`. GitHub Pages está configurado para publicar con GitHub Actions. El workflow despliega el sitio cuando se actualiza la rama `main` o se ejecuta manualmente.

URL prevista: `https://alvaros1705-cloud.github.io/OVA_SISTEMAS_OPERATIVOS/`.
Los recursos de la versión v0.5 usan identificadores de versión para forzar la actualización de los archivos JavaScript y evitar reutilizar scripts antiguos desde la caché del navegador. Si ya tienes el OVA abierto, recárgalo con Ctrl+F5.
