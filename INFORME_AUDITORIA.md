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


## Integración del Laboratorio v0.5 (22/11/2026)

- Se habilitó el módulo **Laboratorio** como catálogo central de simuladores, con búsqueda y orden alfabético por el nombre propio del simulador, sin usar nombres de carpetas ni nombres de estudiantes.
- Se añadieron accesos al Laboratorio desde la página principal (index.html) y desde la navegación del aula (aula.html). Se actualizó la navegación bilingüe del portal.
- Se integraron nueve simuladores locales como paquetes HTML autónomos comprimidos: CPU Arena, Deadlock Hunter, DiskLab, DiskSim Pro, Grafos y Avestruz, IO/LAB, algoritmo del banquero, condiciones de Coffman y planificación del brazo del disco.
- Los HTML originales se conservaron. Cuando una entrega separaba HTML, CSS y JavaScript, los archivos relacionados se agruparon en un documento autónomo respetando el contenido y el orden de ejecución; no se reemplazó la interfaz por una plantilla común.
- Se añadieron dos accesos a sitios publicados por sus proyectos: IPC Messenger y SIM-01. Ambos se abren en una pestaña nueva y permanecen alojados en sus direcciones originales.
- El inventario muestra **11 simuladores disponibles**: nueve integrados como paquetes locales y dos enlazados a sus sitios publicados.
- **I/O Simulator — Simulador de Periféricos & Interrupciones** queda en preparación: se recibió el código React/Vite, pero no una compilación estática validada para Pages.
- **SyncWatch** queda pendiente de entrega ejecutable: el paquete recibido contiene solamente el informe PDF, no la aplicación ni sus archivos fuente.
- Validación local: se verificó la descompresión gzip/base64 de los nueve paquetes y la sintaxis JavaScript de los scripts extraídos. Se comprobó la presencia y el tamaño exacto de los nueve archivos publicados en GitHub.
- Se verificó que GitHub Pages sirve el portal principal y la página del Laboratorio con el nuevo contenido. La interacción completa de cada simulador todavía debe probarse manualmente en navegadores y dispositivos reales.


## Ajuste de legibilidad y experiencia OVA v0.6 (22/11/2026)

- Se corrigió el tema claro del aula OVA en `css/estilos.css`: ahora las variables globales de fondo, superficies, bordes y tipografía cambian de forma coherente junto con `data-theme="light"`.
- Se corrigió el contraste de los títulos principales, etiquetas de cada pregunta y texto de las opciones de respuesta. También se definieron colores legibles para opciones seleccionadas, correctas e incorrectas.
- Se actualizó la referencia de caché del aula a `css/estilos.css?v=0.6`.
- Auditoría de integración: `index.html` usa `portal.css` y `portal.js`; `aula.html` usa `css/estilos.css` y `js/app.js`. Las páginas de los temas conservan sus recursos CSS/JS específicos o sus bloques integrados cuando se entregaron como documentos autónomos.
- Se conserva la separación entre el portal, el aula y las OVAs temáticas para no imponer una plantilla única ni alterar los diseños originales de los materiales.
- El portal y el aula comparten la clave de preferencia `ovaTema`, por lo que la selección de modo claro/oscuro se mantiene entre ambas páginas.
- Validación estática: se confirmó el enlace CSS/JS de las páginas principales y el balance de llaves del archivo CSS actualizado. La comprobación visual definitiva de todos los estados debe realizarse en navegador con los modos claro y oscuro.


## Ajustes de interacción visual y redes sociales v0.7 (22/11/2026)

- Portada: se añadió movimiento ambiental discreto a la tarjeta gráfica del procesador, órbitas, etiquetas flotantes y el indicador de conexión. La animación respeta `prefers-reduced-motion`.
- Aula: se corrigió el estado `hover` de la unidad activa para que conserve su fondo verde y textos claros; las otras unidades mantienen contraste en el modo claro.
- Corte 03: se definieron superficies claras y tipografía oscura para todos los recursos no visitados. Los recursos visitados conservan un resaltado verde diferenciado, y el foco/hover ofrece una señal visual sin oscurecer el contenido.
- Redes institucionales: se conectaron los iconos de Facebook e Instagram en la cabecera del portal y del aula a las cuentas oficiales proporcionadas por el docente. Los enlaces abren en una pestaña nueva con protección `noopener noreferrer`.
- Caché de estilos: portal `portal.css?v=0.6`; aula `css/estilos.css?v=0.7`.
- No se modificaron los textos académicos, los bancos de preguntas ni el flujo de evaluación. Se conservan las hojas de estilo y scripts propios de cada OVA temática.


## Corrección de interacción y caché v0.8 (22/11/2026)

- Aula, ruta de aprendizaje: se reforzó con alta especificidad el estado de la unidad activa en modo claro. El fondo verde y los textos blancos quedan fijados también en hover, foco y foco visible; se fuerza opacidad completa y se elimina cualquier filtro que reduzca el contraste.
- Aula, tooltips: se retiró el atributo `title` de las tarjetas de unidad porque el tooltip nativo del navegador se superponía sobre el nombre. Se conservan las etiquetas accesibles `aria-label`.
- Redes sociales del portal: los enlaces de Facebook e Instagram se colocaron dentro de la navegación responsive. Se corrigió el traductor para que solo actualice anclas internas con `href^="#"`; antes trataba los iconos sociales como entradas de navegación y podía reemplazar sus SVG por texto vacío.
- Aula: se revisaron los enlaces sociales, se mantuvieron como anclas normales con navegación directa y se preparó su acceso visible en pantallas móviles.
- Portada: el movimiento visual se activa mediante JavaScript con la clase `motion-active`, se pausa al ocultar la pestaña y respeta `prefers-reduced-motion`. Incluye movimiento suave del chip y parallax con puntero en escritorio.
- Versiones de recursos para evitar caché: portal `portal.css?v=0.8` y `portal.js?v=0.7`; aula `css/estilos.css?v=0.8` y `js/app.js?v=0.6`.
- Validación estática posterior a los cambios: sintaxis JavaScript del portal y del aula comprobada; balance de llaves en ambas hojas CSS comprobado; enlaces y atributos de versiones cotejados en los HTML; selector de traducción limitado a enlaces internos.
- Limitación de validación: el navegador automatizado no pudo iniciar por saldo agotado del servicio externo; el navegador web de esta sesión tampoco pudo abrir GitHub Pages ni las redes sociales. Por lo tanto, no se declara una prueba visual/click end-to-end de producción como completada.
