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
- Tres bloques diferenciados por color: azul, amarillo y rosa.
- Propósito, objetivos, competencia e información académica del PAC.
- Plan de actividades de 16 semanas conforme al apartado 14 del PAC.
- Pie de página con desarrolladores agrupados por bloque.
- Laboratorio central preparado para añadir los simuladores del examen final.

## Preferencias y datos

Las preferencias de apariencia e idioma se guardan localmente mediante `localStorage` (`ovaTema` y `ovaIdioma`). El progreso del estudiante también se almacena localmente en el OVA CORE; no equivale a una plataforma institucional de calificaciones ni sincroniza avances entre diferentes equipos.

Los OVA de los estudiantes mantienen sus interfaces internas y controles originales. Los cambios de idioma/apariencia del portal no reemplazan automáticamente los mecanismos propios de cada módulo.

## Pendientes

- Recibir, auditar e integrar los simuladores adicionales del examen final.
- Incorporar las URL oficiales de Facebook e Instagram.
- Realizar pruebas manuales completas en navegadores y dispositivos reales.
- Revisar académicamente los talleres, juegos y evaluaciones.
- Configurar GitHub Pages con origen `GitHub Actions` en Settings → Pages y confirmar la primera ejecución del flujo.

## Publicación

El repositorio incluye `.github/workflows/deploy-pages.yml`. Una vez habilitado GitHub Pages para publicar con GitHub Actions, el flujo desplegará el sitio cuando se actualice la rama `main` o se ejecute manualmente.

URL prevista: `https://alvaros1705-cloud.github.io/OVA_SISTEMAS_OPERATIVOS/`.