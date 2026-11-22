(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const LANG_KEY = 'ovaIdioma';
  const THEME_KEY = 'ovaTema';
  const safeRead = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } };
  const safeWrite = (key, value) => { try { localStorage.setItem(key, value); } catch { /* storage may be blocked */ } };

  const dictionary = {
    es: {
      title: 'Sistemas Operativos | OVA · Universidad Simón Bolívar',
      skip: 'Saltar al contenido', navAria: 'Navegación principal', socialAria: 'Redes institucionales',
      nav: ['Inicio','Introducción','Objetivos','Plan semanal','Unidades','Laboratorio'],
      themeDark: 'Modo oscuro', themeLight: 'Modo claro', themeDarkAria: 'Cambiar a modo oscuro', themeLightAria: 'Cambiar a modo claro',
      eyebrow: 'INGENIERÍA DE SISTEMAS · VI SEMESTRE', heroTitle: 'Sistemas<br><em>Operativos</em>',
      heroLead: 'Explora cómo el sistema operativo administra los recursos del computador, coordina la ejecución de programas y proporciona los servicios esenciales para construir soluciones tecnológicas seguras y eficientes.',
      heroPrimary: 'Ingresar al OVA', heroSecondary: 'Explorar las unidades',
      meta: ['unidades de aprendizaje','semanas académicas','horas de trabajo académico'],
      facts: ['CÓDIGO','CRÉDITOS','SEMESTRE','MODALIDAD','TRABAJO ACADÉMICO','Presencial'],
      introKicker: '01 · CONTEXTO DEL CURSO', introTitle: 'Comprender el sistema que hace posible la computación.',
      introLead: 'Los sistemas operativos administran los recursos físicos del computador y coordinan los recursos lógicos —software e información— sobre los que trabajan las organizaciones.',
      introP: [
        'Para el ingeniero de sistemas, comprender cómo se gestionan los recursos del computador es fundamental al evaluar, seleccionar, instalar, configurar y administrar soluciones informáticas.',
        'Este OVA reúne contenidos, actividades prácticas y recursos interactivos para recorrer los principales mecanismos internos de un sistema operativo, desde el arranque y los procesos hasta la memoria, los archivos, la entrada/salida y la seguridad.'
      ],
      purpose: [
        {over:'PROPÓSITO DEL CURSO · PAC', title:'Formación profesional crítica, integradora y ética', text:'Formar profesionales con capacidad para gestionar y evaluar las tecnologías de la información en contextos multidisciplinarios y multiculturales con criterios de sostenibilidad y responsabilidad social, desarrollando el saber ser, saber conocer y saber hacer.'},
        {over:'PROPÓSITO DE ESTE OVA', title:'Aprender, practicar y relacionar los componentes', text:'Ofrecer una ruta digital de aprendizaje en la que el estudiante identifique tecnologías de sistemas operativos, comprenda la interacción entre sus componentes físicos y lógicos y practique mediante contenidos, talleres, juegos y laboratorios interactivos.'}
      ],
      objectivesKicker:'02 · RESULTADOS DE APRENDIZAJE', objectivesTitle:'Objetivos de aprendizaje', objectivesIntro:'Organizados a partir de los saberes y resultados específicos establecidos en el PAC del curso.',
      objectives:[
        ['Saber conocer','Identificar las tecnologías relacionadas con los sistemas operativos de los computadores y reconocer los componentes físicos y lógicos que intervienen en la ejecución de programas.','Identificar · Reconocer'],
        ['Saber hacer','Comprender los componentes de los sistemas operativos y la forma como interactúan durante la ejecución de programas, para proponer un uso adecuado de la tecnología en desarrollos tecnológicos.','Comprender · Proponer'],
        ['Saber ser','Argumentar de forma crítica y objetiva sobre las tecnologías relacionadas con la arquitectura del computador, considerando sus bondades y problemáticas, así como sus impactos.','Analizar · Argumentar']
      ],
      competencyOver:'COMPETENCIA PROFESIONAL', competencyTitle:'Gestión de Tecnologías de la Información', competencyText:'Promover el uso estratégico y eficiente de las tecnologías de información, garantizando seguridad, disponibilidad y confiabilidad.',
      unitsKicker:'03 · RUTA DE APRENDIZAJE', unitsTitle:'Tres unidades, un recorrido integrado.', unitsIntro:'Los temas se organizan en tres bloques de aprendizaje. Cada unidad conserva los recursos y las actividades desarrolladas para ella.',
      units:[
        {title:'Fundamentos del sistema operativo',text:'Reconoce los conceptos base, el arranque, los sistemas de archivos y los procesos.',topics:['Máquinas virtuales','Kernel y booting','Sistemas de archivos','Procesos'],count:'4 temas y actividades',link:'Explorar unidad'},
        {title:'Procesos, concurrencia y memoria',text:'Estudia la planificación, la comunicación entre procesos, los hilos y la administración de memoria.',topics:['Planificación de procesos','Sistemas distribuidos, sockets e hilos','Concurrencia de procesos','Memoria'],count:'4 temas y actividades',link:'Explorar unidad'},
        {title:'Memoria avanzada y servicios del sistema',text:'Profundiza en memoria virtual, entrada/salida, seguridad y sistemas con requisitos temporales.',topics:['Memoria virtual','Entrada / Salida (E/S)','Seguridad','Tiempo real, sistemas embebidos y tolerancia a fallos'],count:'4 temas y evaluación',link:'Explorar unidad'}
      ],
      classroomOver:'AULA INTERACTIVA · OVA CORE', classroomTitle:'Continúa tu recorrido de aprendizaje', classroomText:'Accede a los contenidos, talleres, juegos y cuestionarios que acompañan las tres unidades.', classroomButton:'Entrar al aula',
      planKicker:'04 · ORGANIZACIÓN ACADÉMICA', planTitle:'Plan de actividades semanal', planIntro:'Secuencia de 16 semanas tomada del apartado 14 del PAC. Cada semana contempla 6 horas de clase práctica en laboratorios.',
      legend:['Unidad 1','Unidad 2','Unidad 3','Inicio / cierre'], weekPrefix:'SEMANA', hours:'6 horas', practical:'Clase práctica', labs:'Laboratorios',
      weeks:['Introducción','Máquinas virtuales','Kernel y booting','Sistemas de archivos','Procesos','Examen','Planificación de procesos','Sistemas distribuidos, sockets e hilos','Concurrencia de procesos','Memoria','Memoria virtual','Examen','Entrada / Salida (E/S)','Seguridad','Tiempo real, sistemas embebidos y tolerancia a fallos','Evaluación final'],
      weekNotes:['Laboratorios','Laboratorios','Laboratorios','Laboratorios','Laboratorios','Laboratorios · Cierre unidad 1','Laboratorios','Laboratorios','Laboratorios','Laboratorios','Laboratorios','Laboratorios · Evaluación programada','Laboratorios','Laboratorios','Laboratorios','Laboratorios · Cierre del curso'],
      planNote:'Nota: la distribución semanal reproduce la secuencia del PAC. La clasificación visual por unidades sigue los tres bloques de integración definidos para este OVA.',
      methodKicker:'05 · METODOLOGÍA DE APRENDIZAJE', methodTitle:'De los conceptos a la experimentación.', methodText:'El curso combina diagnóstico de saberes previos, búsqueda y consulta de información, exposiciones como trabajo independiente y talleres prácticos de simulación de proyectos.',
      methodSteps:['Explora y consulta','Comprende los conceptos','Practica en laboratorios','Argumenta y evalúa'],
      simKicker:'06 · EXPERIMENTACIÓN', simTitle:'Laboratorio de simuladores', simIntro:'Un espacio centralizado para experimentar con los simuladores de Sistemas Operativos, respetando la interfaz y la experiencia original de cada proyecto.',
      simOver:'ESPACIO DE EXPERIMENTACIÓN', simFeatureTitle:'Explora. Configura. Experimenta.', simFeatureText:'Encuentra los simuladores organizados alfabéticamente por su nombre. Cada laboratorio conserva su propio diseño, controles y recursos; el OVA solo proporciona un punto de acceso común.', simStatus:'Laboratorio disponible',
      simCards:[
        ['Acceso centralizado','Simuladores de procesos, concurrencia, memoria, discos y entrada/salida.','Ver simuladores'],
        ['Diseños originales','Los simuladores se abren con su interfaz y controles originales, sin rediseñar sus pantallas.','Abrir Laboratorio'],
        ['Recursos en preparación','Los proyectos que requieren compilación o archivos ejecutables adicionales se identifican antes de habilitar su acceso.','Consultar estado']
      ],
      closingOver:'SISTEMAS OPERATIVOS · INGENIERÍA DE SISTEMAS', closingTitle:'Conoce el sistema. Comprende sus procesos. Experimenta.', closingText:'Inicia el recorrido por las unidades de aprendizaje y utiliza los recursos interactivos para reforzar los conceptos.', closingButton:'Ingresar al aula',
      footerOver:'OBJETO VIRTUAL DE APRENDIZAJE', footerText:'Programa de Ingeniería de Sistemas · Universidad Simón Bolívar.', footerNav:'NAVEGACIÓN', footerResources:'RECURSOS', footerDevelopers:'DESARROLLADORES', footerNavLinks:['Inicio','Introducción','Objetivos','Plan semanal','Unidades de aprendizaje','Laboratorio de simuladores'], footerResourceLinks:['Unidad 1 · Fundamentos','Unidad 2 · Procesos y memoria','Unidad 3 · Servicios avanzados','Simulador de archivos'], footerUnits:['Unidad 1 · Fundamentos','Unidad 2 · Procesos y memoria','Unidad 3 · Memoria y servicios'], footerBottom:'Universidad Simón Bolívar · Ingeniería de Sistemas', footerCourse:'OVA de Sistemas Operativos'
    },
    en: {
      title: 'Operating Systems | VLO · Simón Bolívar University',
      skip: 'Skip to content', navAria: 'Main navigation', socialAria: 'University social networks',
      nav: ['Home','Introduction','Objectives','Weekly plan','Units','Laboratory'],
      themeDark: 'Dark mode', themeLight: 'Light mode', themeDarkAria: 'Switch to dark mode', themeLightAria: 'Switch to light mode',
      eyebrow: 'SYSTEMS ENGINEERING · SIXTH SEMESTER', heroTitle: 'Operating<br><em>Systems</em>',
      heroLead: 'Explore how the operating system manages computer resources, coordinates program execution, and provides the essential services needed to build secure and efficient technological solutions.',
      heroPrimary: 'Enter the VLO', heroSecondary: 'Explore the units',
      meta: ['learning units','academic weeks','hours of academic work'],
      facts: ['COURSE CODE','CREDITS','SEMESTER','MODALITY','ACADEMIC WORK','On campus'],
      introKicker: '01 · COURSE CONTEXT', introTitle: 'Understand the system that makes computing possible.',
      introLead: 'Operating systems manage a computer’s physical resources and coordinate the logical resources —software and information— used by organizations.',
      introP: [
        'For a systems engineer, understanding how computer resources are managed is essential when evaluating, selecting, installing, configuring, and administering IT solutions.',
        'This VLO brings together learning content, practical activities, and interactive resources to explore the main internal mechanisms of an operating system, from booting and processes to memory, files, input/output, and security.'
      ],
      purpose: [
        {over:'COURSE PURPOSE · PAC', title:'Critical, integrated, and ethical professional development', text:'Develop professionals capable of managing and evaluating information technologies in multidisciplinary and multicultural contexts, guided by sustainability and social responsibility, while strengthening being, knowing, and doing.'},
        {over:'PURPOSE OF THIS VLO', title:'Learn, practice, and connect the components', text:'Provide a digital learning path in which students identify operating-system technologies, understand how physical and logical components interact, and practice through content, workshops, games, and interactive laboratories.'}
      ],
      objectivesKicker:'02 · LEARNING OUTCOMES', objectivesTitle:'Learning objectives', objectivesIntro:'Organized around the knowledge areas and specific learning outcomes established in the course PAC.',
      objectives:[
        ['Knowledge','Identify technologies related to computer operating systems and recognize the physical and logical components involved in program execution.','Identify · Recognize'],
        ['Skills','Understand operating-system components and how they interact during program execution in order to propose appropriate uses of technology in technological developments.','Understand · Propose'],
        ['Professional attitude','Present critical and objective arguments about technologies related to computer architecture, considering their benefits, challenges, and impacts.','Analyze · Discuss']
      ],
      competencyOver:'PROFESSIONAL COMPETENCY', competencyTitle:'Information Technology Management', competencyText:'Promote the strategic and efficient use of information technologies while ensuring security, availability, and reliability.',
      unitsKicker:'03 · LEARNING PATH', unitsTitle:'Three units, one integrated learning journey.', unitsIntro:'Topics are organized into three learning blocks. Each unit retains the resources and activities developed for it.',
      units:[
        {title:'Operating-system foundations',text:'Explore core concepts, booting, file systems, and processes.',topics:['Virtual machines','Kernel and booting','File systems','Processes'],count:'4 topics and activities',link:'Explore unit'},
        {title:'Processes, concurrency, and memory',text:'Study scheduling, interprocess communication, threads, and memory management.',topics:['Process scheduling','Distributed systems, sockets, and threads','Process concurrency','Memory'],count:'4 topics and activities',link:'Explore unit'},
        {title:'Advanced memory and system services',text:'Explore virtual memory, input/output, security, and systems with timing requirements.',topics:['Virtual memory','Input / Output (I/O)','Security','Real-time systems, embedded systems, and fault tolerance'],count:'4 topics and assessment',link:'Explore unit'}
      ],
      classroomOver:'INTERACTIVE CLASSROOM · OVA CORE', classroomTitle:'Continue your learning journey', classroomText:'Access the content, workshops, games, and quizzes that support the three learning units.', classroomButton:'Enter classroom',
      planKicker:'04 · ACADEMIC ORGANIZATION', planTitle:'Weekly activity plan', planIntro:'The 16-week sequence comes from section 14 of the course PAC. Each week includes 6 hours of practical laboratory classes.',
      legend:['Unit 1','Unit 2','Unit 3','Opening / closing'], weekPrefix:'WEEK', hours:'6 hours', practical:'Practical class', labs:'Laboratories',
      weeks:['Introduction','Virtual machines','Kernel and booting','File systems','Processes','Exam','Process scheduling','Distributed systems, sockets, and threads','Process concurrency','Memory','Virtual memory','Exam','Input / Output (I/O)','Security','Real-time systems, embedded systems, and fault tolerance','Final assessment'],
      weekNotes:['Laboratories','Laboratories','Laboratories','Laboratories','Laboratories','Laboratories · Unit 1 review','Laboratories','Laboratories','Laboratories','Laboratories','Laboratories','Laboratories · Scheduled assessment','Laboratories','Laboratories','Laboratories','Laboratories · Course closing'],
      planNote:'Note: the weekly sequence reproduces the PAC. The visual classification by unit follows the three integration blocks defined for this VLO.',
      methodKicker:'05 · LEARNING METHODOLOGY', methodTitle:'From concepts to experimentation.', methodText:'The course combines a prior-knowledge diagnostic, information search and consultation, student presentations as independent work, and practical project-simulation workshops.',
      methodSteps:['Explore and research','Understand the concepts','Practice in laboratories','Discuss and evaluate'],
      simKicker:'06 · EXPERIMENTATION', simTitle:'Simulator laboratory', simIntro:'A centralized space to experiment with Operating Systems simulators while preserving each project’s original interface and experience.',
      simOver:'INTEGRATION SPACE', simFeatureTitle:'Explore. Configure. Experiment.', simFeatureText:'Find simulators arranged alphabetically by name. Each laboratory keeps its own design, controls, and resources; the VLO simply provides a common access point.', simStatus:'Laboratory available',
      simCards:[
        ['Centralized access','Simulators for processes, concurrency, memory, disks, and input/output.','View simulators'],
        ['Original designs','Simulators open with their original interfaces and controls; their screens are not redesigned.','Open Laboratory'],
        ['Resources in preparation','Projects requiring a build or additional executable files are identified before access is enabled.','Check status']
      ],
      closingOver:'OPERATING SYSTEMS · SYSTEMS ENGINEERING', closingTitle:'Know the system. Understand its processes. Experiment.', closingText:'Begin your journey through the learning units and use the interactive resources to reinforce the concepts.', closingButton:'Enter classroom',
      footerOver:'VIRTUAL LEARNING OBJECT', footerText:'Systems Engineering Program · Simón Bolívar University.', footerNav:'NAVIGATION', footerResources:'RESOURCES', footerDevelopers:'DEVELOPERS', footerNavLinks:['Home','Introduction','Objectives','Weekly plan','Learning units','Simulator laboratory'], footerResourceLinks:['Unit 1 · Foundations','Unit 2 · Processes and memory','Unit 3 · Advanced services','File-system simulator'], footerUnits:['Unit 1 · Foundations','Unit 2 · Processes and memory','Unit 3 · Memory and services'], footerBottom:'Simón Bolívar University · Systems Engineering', footerCourse:'Operating Systems VLO'
    }
  };

  let language = safeRead(LANG_KEY, 'es');
  if (!dictionary[language]) language = 'es';
  let theme = safeRead(THEME_KEY, 'light');
  if (!['light','dark'].includes(theme)) theme = 'light';

  function write(el, value, html = false) { if (!el) return; if (html) el.innerHTML = value; else el.textContent = value; }
  function setTheme(next, persist = true) {
    theme = next === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (persist) safeWrite(THEME_KEY, theme);
    const label = theme === 'dark' ? dictionary[language].themeLight : dictionary[language].themeDark;
    const aria = theme === 'dark' ? dictionary[language].themeLightAria : dictionary[language].themeDarkAria;
    write($('#themeToggleLabel'), label);
    write($('.theme-toggle-icon'), theme === 'dark' ? '☀' : '☾');
    const btn = $('#themeToggle');
    if (btn) { btn.setAttribute('aria-label', aria); btn.setAttribute('aria-pressed', String(theme === 'dark')); }
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = theme === 'dark' ? '#0c2316' : '#09843B';
  }

  function applyLanguage(next, persist = true) {
    language = dictionary[next] ? next : 'es';
    const d = dictionary[language];
    if (persist) safeWrite(LANG_KEY, language);
    document.documentElement.lang = language;
    document.title = d.title;
    write($('.skip-link'), d.skip);
    $('.main-nav')?.setAttribute('aria-label', d.navAria);
    $('.social-links')?.setAttribute('aria-label', d.socialAria);
    $('#menuToggle')?.setAttribute('aria-label', language === 'es' ? 'Abrir menú' : 'Open menu');
    $$('.main-nav a[href^="#"]').forEach((el,i)=>write(el,d.nav[i]||''));
    $$('.language-button').forEach(btn=>{const active=btn.dataset.portalLang===language;btn.classList.toggle('is-active',active);btn.setAttribute('aria-pressed',String(active));});
    write($('.eyebrow'), d.eyebrow);
    write($('#heroTitle'), d.heroTitle, true);
    write($('.hero-lead'), d.heroLead);
    const heroBtns=$$('.hero-actions .btn');
    if(heroBtns[0]) write(heroBtns[0], `${d.heroPrimary} <span aria-hidden="true">→</span>`,true);
    if(heroBtns[1]) write(heroBtns[1],d.heroSecondary);
    $$('.hero-meta span').forEach((el,i)=>{const value=el.querySelector('strong')?.outerHTML||'';write(el,`${value} ${d.meta[i]||''}`,true);});
    $$('.fact-label').forEach((el,i)=>write(el,d.facts[i]||''));
    const modalityFact = $('.fact:nth-child(4) strong');
    if (modalityFact) write(modalityFact, language === 'es' ? 'Presencial' : 'On campus');
    const intro=$('#introduccion');
    write($('.section-kicker',intro),d.introKicker); write($('.intro-grid h2',intro),d.introTitle);
    write($('.section-lead',intro),d.introLead);
    $$('.intro-copy p',intro).forEach((el,i)=>write(el,d.introP[i]||''));
    $$('.purpose-card',intro).forEach((card,i)=>{const item=d.purpose[i];if(!item)return;write($('.card-overline',card),item.over);write($('h3',card),item.title);write($('p',card),item.text);});
    const obj=$('#objetivos'); write($('.section-kicker',obj),d.objectivesKicker);write($('.section-heading h2',obj),d.objectivesTitle);write($('.section-heading>p',obj),d.objectivesIntro);
    $$('.objective-card',obj).forEach((card,i)=>{const a=d.objectives[i];if(!a)return;write($('h3',card),a[0]);write($('p',card),a[1]);write($('.objective-tag',card),a[2]);});
    write($('.competency-band .card-overline'),d.competencyOver);write($('.competency-band h3'),d.competencyTitle);write($('.competency-band p'),d.competencyText);
    const units=$('#unidades');write($('.section-kicker',units),d.unitsKicker);write($('.section-heading h2',units),d.unitsTitle);write($('.section-heading>p',units),d.unitsIntro);
    $$('.unit-card',units).forEach((card,i)=>{const u=d.units[i];if(!u)return;write($('h3',card),u.title);write($(':scope > p',card),u.text);$$('li',card).forEach((li,j)=>write(li,u.topics[j]||''));write($('.unit-bottom > span',card),u.count);write($('.unit-link',card),`${u.link} <b>→</b>`,true);});
    write($('.classroom-cta .card-overline'),d.classroomOver);write($('.classroom-cta h3'),d.classroomTitle);write($('.classroom-cta p'),d.classroomText);write($('.classroom-cta .btn'),`${d.classroomButton} <span aria-hidden="true">→</span>`,true);
    const plan=$('#plan');write($('.section-kicker',plan),d.planKicker);write($('.section-heading h2',plan),d.planTitle);write($('.section-heading>p',plan),d.planIntro);
    $$('.plan-legend span',plan).forEach((el,i)=>{const icon=el.querySelector('i')?.outerHTML||'';write(el,`${icon} ${d.legend[i]||''}`,true);});
    $$('.week-card',plan).forEach((card,i)=>{const w=$('h3',card);write(w,d.weeks[i]||'');const weekLabel=$('.week-number',card);if(weekLabel)write(weekLabel,`${d.weekPrefix} <b>${String(i+1).padStart(2,'0')}</b>`,true);const meta=$$('.week-meta span',card);if(meta[0])write(meta[0],d.hours);if(meta[1])write(meta[1],d.practical);write($('small',card),d.weekNotes[i]||d.labs);});
    const note=$('.plan-note',plan);if(note)write(note,`<strong>${language==='es'?'Nota:':'Note:'}</strong> ${d.planNote.replace(/^(Nota:|Note:)\s*/,'')}`,true);
    const method=$('.method-band');write($('.section-kicker',method),d.methodKicker);write($('.method-content h2',method),d.methodTitle);write($('.method-content p',method),d.methodText);$$('.method-steps div span',method).forEach((el,i)=>write(el,d.methodSteps[i]||''));
    const sim=$('#laboratorios');write($('.section-kicker',sim),d.simKicker);write($('.section-heading h2',sim),d.simTitle);write($('.section-heading>p',sim),d.simIntro);write($('.simulator-feature .card-overline',sim),d.simOver);write($('.simulator-feature h3',sim),d.simFeatureTitle);write($('.simulator-feature p',sim),d.simFeatureText);write($('.integration-status',sim),`<i></i> ${d.simStatus}`,true);
    $$('.simulator-mini',sim).forEach((card,i)=>{const v=d.simCards[i];if(!v)return;write($('h4',card),v[0]);write($('p',card),v[1]);if($('a',card))write($('a',card),v[2]+' →');if($('.pending-label',card))write($('.pending-label',card),v[2]);});
    const close=$('.closing-callout');write($('.card-overline',close),d.closingOver);write($('h2',close),d.closingTitle);write($('p',close),d.closingText);write($('.btn',close),`${d.closingButton} <span aria-hidden="true">→</span>`,true);
    const footer=$('.site-footer');write($('.footer-overline',footer),d.footerOver);write($('.footer-brand>p',footer),d.footerText);
    const cols=$$('.footer-column',footer);if(cols[0]){write($('h3',cols[0]),d.footerNav);$$('a',cols[0]).forEach((el,i)=>write(el,d.footerNavLinks[i]||''));}if(cols[1]){write($('h3',cols[1]),d.footerResources);$$('a',cols[1]).forEach((el,i)=>write(el,d.footerResourceLinks[i]||''));}
    const dev=$('.footer-developers',footer);write($('h3',dev),d.footerDevelopers);$$('details summary',dev).forEach((el,i)=>write(el,d.footerUnits[i]||''));
    const bottom=$$('.footer-bottom span');if(bottom[0])write(bottom[0],d.footerBottom);if(bottom[1])write(bottom[1],d.footerCourse);
    // Synchronize the aula and supported embedded OVAs with the portal language.
    $$('[data-lang]').forEach(btn=>{if(btn.dataset.lang===language)btn.setAttribute('aria-pressed','true');});
    setTheme(theme,false);
  }

  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? (language==='es'?'Cerrar menú':'Close menu') : (language==='es'?'Abrir menú':'Open menu'));
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', language==='es'?'Abrir menú':'Open menu');
    }));
  }
  $$('.language-button').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.portalLang)));
  $('#themeToggle')?.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
  setTheme(theme,false);
  applyLanguage(language,false);

  // La animación del procesador se activa desde JavaScript y sus movimientos
  // se definen en portal.css. Se pausa cuando la pestaña no está visible o
  // cuando el usuario solicita movimiento reducido.
  function initHeroMotion() {
    const visual = document.querySelector('.hero-visual');
    if (!visual) return;

    const card = visual.querySelector('.chip-card');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncMotion = () => {
      const shouldAnimate = !reduceMotion.matches && !document.hidden;
      visual.classList.toggle('motion-active', shouldAnimate);
      visual.classList.toggle('motion-paused', !shouldAnimate);
      if (!shouldAnimate && card) {
        card.style.setProperty('--parallax-x', '0px');
        card.style.setProperty('--parallax-y', '0px');
      }
    };

    syncMotion();
    document.addEventListener('visibilitychange', syncMotion);
    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', syncMotion);
    } else if (typeof reduceMotion.addListener === 'function') {
      reduceMotion.addListener(syncMotion);
    }

    if (card) {
      visual.addEventListener('pointermove', event => {
        if (reduceMotion.matches || event.pointerType === 'touch') return;
        const rect = visual.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--parallax-x', (x * -12).toFixed(1) + 'px');
        card.style.setProperty('--parallax-y', (y * -8).toFixed(1) + 'px');
      }, { passive: true });

      visual.addEventListener('pointerleave', () => {
        card.style.setProperty('--parallax-x', '0px');
        card.style.setProperty('--parallax-y', '0px');
      }, { passive: true });
    }
  }

  initHeroMotion();

  function initHeroTitleMotion() {
    const title = document.querySelector('#heroTitle');
    if (!title) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncTitleMotion = () => {
      const enabled = !reduceMotion.matches && !document.hidden;
      title.classList.toggle('hero-title-motion', enabled);
      title.classList.toggle('hero-title-static', !enabled);
    };

    syncTitleMotion();
    document.addEventListener('visibilitychange', syncTitleMotion);
    if (typeof reduceMotion.addEventListener === 'function') {
      reduceMotion.addEventListener('change', syncTitleMotion);
    } else if (typeof reduceMotion.addListener === 'function') {
      reduceMotion.addListener(syncTitleMotion);
    }
  }

  initHeroTitleMotion();
})();