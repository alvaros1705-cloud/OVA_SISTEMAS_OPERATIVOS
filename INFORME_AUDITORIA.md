# Informe de auditoría y estado de integración

## Alcance

- Fuente de contenidos: ZIP de la OVA de Sistemas Operativos entregado por el docente.
- La OVA de Modelos de Transformación Empresarial se utilizó únicamente como referencia de composición visual; sus contenidos y archivos no se incorporaron.
- Se excluyó `.git/` del ZIP fuente para no arrastrar historial ni referencias de otro repositorio.
- Se conservaron los módulos originales de los estudiantes, sus recursos, juegos, evaluaciones internas, imágenes y talleres PDF.
- Los módulos monolíticos originales de los tres cortes se mantienen byte a byte respecto del ZIP y del contenido que ya estaba en el repositorio GitHub. No se alteraron para forzar un diseño común.

## Arquitectura entregada

- `index.html`: portal institucional de entrada.
- `portal.css` y `portal.js`: diseño del portal, navegación y preferencias de idioma/apariencia.
- `aula.html`, `css/estilos.css` y `js/app.js`: OVA CORE con navegación por tres bloques, preguntas y seguimiento local.
- `temas/tema1/`: primer bloque académico.
- `temas/tema2/`: segundo bloque académico.
- `temas/tema3/`: plataforma de evaluación y cuatro OVA específicos del tercer bloque.
- `recursos visuales/`: recursos institucionales originales ya existentes en el repositorio.
- `.github/workflows/deploy-pages.yml`: flujo de publicación automática mediante GitHub Actions.
- `.nojekyll`: evita procesamiento Jekyll de los recursos estáticos.

## Identidad, apariencia e idioma

- El portal tiene selector español/inglés y modo claro/oscuro.
- El aula OVA CORE tiene controles propios para español/inglés y modo claro/oscuro, y recuerda preferencias mediante `localStorage`.
- Los OVA de los estudiantes conservan sus controles y apariencia originales. El primer y segundo bloque tienen selectores internos de idioma y/o tema; la tercera plataforma acepta mensajes de idioma y el estado oscuro del contenedor.
- El logo oficial se utiliza desde `recursos visuales/` sin cambiar su proporción ni recolorearlo. El verde institucional aplicado al portal es `#09843B`, según el Manual de Imagen e Identidad Corporativa.
- El pie de página utiliza degradado verde institucional y presenta el reconocimiento de los desarrolladores por bloque.

## Contenido académico

- Los datos de identificación del curso y la competencia se tomaron del PAC.
- El propósito del curso se basa en el apartado 4 del PAC; el propósito del OVA se redactó para describir la función del recurso digital.
- El plan de 16 semanas reproduce el apartado 14 del PAC: 6 horas, clase práctica y laboratorios para cada semana.
- La ruta del OVA se organiza en los tres bloques de integración definidos por el docente (azul, amarillo y rosa). Esto se diferencia de la estructura curricular de cinco unidades descrita en el apartado 7 del PAC.
- Los nombres de desarrolladores se muestran agrupados según la distribución temática proporcionada por el docente.

## Verificaciones estáticas realizadas

- 16 archivos HTML examinados.
- 0 referencias locales `src`/`href` faltantes.
- 5 archivos JavaScript independientes: 0 errores de sintaxis con `node --check`.
- 6 hojas CSS: 0 errores de análisis sintáctico.
- Los cuatro PDF de talleres están presentes dentro de la plataforma del tercer bloque.
- Los tres HTML monolíticos principales conservan el mismo hash Git que los archivos originales ya presentes en GitHub.

Estas comprobaciones no sustituyen una prueba manual de navegación, interacción, accesibilidad y visualización en navegadores/dispositivos reales. Esa validación funcional final debe realizarse antes de considerar la OVA institucionalmente cerrada.

## Limitaciones y pendientes

- Los simuladores adicionales asignados para el examen final aún no se han recibido; la sección central queda preparada para incorporarlos.
- Las URL oficiales de Facebook e Instagram quedan pendientes de recibir.
- El panel administrativo de la tercera plataforma conserva un prototipo basado en `localStorage` y código del lado del cliente. No debe utilizarse para calificaciones oficiales ni datos sensibles.
- Los cuatro PDF de talleres se conservaron; su calidad y correspondencia académica requieren revisión docente.
- La traducción general del portal y del OVA CORE está incluida; las traducciones internas de los módulos estudiantiles dependen de sus propios controles y contenidos disponibles.
- El sitio aún requiere activar/verificar GitHub Pages y ejecutar la primera publicación.

## Correcciones posteriores a la primera publicación (v0.3)

- Se corrigió la navegación entre cortes: al seleccionar una unidad, el aula vuelve al inicio del contenido y ya no desplaza al primer cuestionario. Seleccionar nuevamente el corte activo tampoco abre automáticamente el primer recurso.
- La plataforma de evaluación del tercer corte ahora abre en modo Invitado / Acceso libre y muestra directamente su recorrido de temas. El formulario de nombre y semestre dejó de ser un requisito de entrada.
- Los OVA de los estudiantes, sus talleres y sus recursos se conservan. Los simuladores nuevos se integrarán cuando sean entregados, manteniendo la posibilidad de preservar su diseño original.
- Validaciones efectuadas: sintaxis JavaScript correcta en los archivos modificados y comprobaciones estructurales positivas de ambos comportamientos. La comprobación visual manual en navegador queda pendiente.


## Corrección reforzada v0.4 (22/11/2026)

- La navegación entre cortes desplaza el contenedor al encabezado del dashboard mediante `scrollIntoView`, además de reiniciar el scroll del documento. Esto cubre el caso en que OVA CORE está dentro del visor integrado.
- La plataforma de evaluación declara `meta[name="ova-access-mode"][content="guest"]`. La rutina `prepararFrame()` del aula anfitriona reconoce la marca y omite el autollenado/envío del formulario antiguo, que exigía seleccionar semestre.
- La plataforma mantiene su sesión `Invitado / Acceso libre` y oculta explícitamente el formulario de registro al iniciar.
- Se añadieron identificadores `v=0.4` en las rutas y recursos afectados para evitar que el navegador reutilice JavaScript antiguo.
- Requiere recarga completa de pestañas abiertas previamente (Ctrl+F5) para sustituir los recursos almacenados en caché.
