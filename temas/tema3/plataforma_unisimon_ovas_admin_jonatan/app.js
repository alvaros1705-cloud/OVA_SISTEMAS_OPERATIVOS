const TOPICS = [{"title":"Tema 1: Memoria virtual","slug":"memoria-virtual","game":"Ahorcado de conceptos","questions":[["La memoria virtual permite ejecutar programas aunque no toda su información esté cargada en la RAM.",["Verdadero","Falso"],0],["¿Qué recurso utiliza el sistema como apoyo cuando la RAM no es suficiente?",["La memoria caché","El almacenamiento secundario","El procesador"],1],["¿Qué es una página en memoria virtual?",["Un bloque de tamaño fijo","Un archivo ejecutable","Una conexión de red"],0],["Un fallo de página ocurre cuando se necesita una página que no está actualmente en RAM.",["Verdadero","Falso"],0],["¿Qué puede ocurrir si el sistema pasa demasiado tiempo intercambiando páginas?",["Sobrepaginación","Compresión de archivos","Apagado automático"],0]],"words":[{"word":"PAGINA","clue":"Bloque de tamaño fijo en el que se divide la memoria virtual."},{"word":"MARCO","clue":"Espacio de la memoria RAM donde se carga una página."}]},{"title":"Tema 2: E/S","slug":"entrada-salida","game":"Ahorcado de conceptos","questions":[["Los dispositivos de entrada permiten introducir datos al computador.",["Verdadero","Falso"],0],["¿Cuál es un dispositivo de salida?",["Teclado","Monitor","Ratón"],1],["¿Qué componente coordina la comunicación entre el dispositivo y el sistema?",["Controlador","Carpeta","Navegador"],0],["La E/S por interrupciones permite avisar al procesador cuando un dispositivo requiere atención.",["Verdadero","Falso"],0],["¿Qué técnica permite transferir bloques de datos sin que la CPU gestione cada byte?",["DMA","Paginación","Cifrado"],0]],"words":[{"word":"CONTROLADOR","clue":"Componente que coordina la comunicación entre el sistema y un dispositivo."},{"word":"PERIFERICO","clue":"Dispositivo externo que permite entrada o salida de datos."}]},{"title":"Tema 3: Seguridad","slug":"seguridad","game":"Ahorcado de conceptos","questions":[["La confidencialidad busca que la información solo sea vista por personas autorizadas.",["Verdadero","Falso"],0],["¿Cuál es una buena práctica para proteger una cuenta?",["Compartir la clave","Usar una contraseña robusta","Repetir la misma clave en todo"],1],["¿Qué principio evita cambios no autorizados en los datos?",["Integridad","Disponibilidad","Velocidad"],0],["Un antivirus ayuda a detectar o bloquear software malicioso.",["Verdadero","Falso"],0],["¿Qué es la autenticación?",["Comprobar la identidad de un usuario","Eliminar archivos temporales","Aumentar la RAM"],0]],"words":[{"word":"CIFRADO","clue":"Técnica que transforma la información para que no pueda leerse sin autorización."},{"word":"FIREWALL","clue":"Barrera de seguridad que filtra el tráfico de una red."}]},{"title":"Tema 4: Tiempo real, sistemas embebidos y tolerancia a fallos","slug":"tiempo-real","game":"Ahorcado de conceptos","questions":[["En un sistema de tiempo real, cumplir el plazo puede ser tan importante como obtener el resultado correcto.",["Verdadero","Falso"],0],["¿Cuál es un ejemplo de sistema embebido?",["Controlador de una lavadora","Un documento de texto","Una página impresa"],0],["¿Qué significa tolerancia a fallos?",["Seguir funcionando ante ciertos errores","Evitar todas las actualizaciones","Aumentar el tamaño del monitor"],0],["Un sistema de tiempo real duro puede fallar si no cumple un plazo crítico.",["Verdadero","Falso"],0],["¿Qué recurso puede mejorar la continuidad del servicio?",["Redundancia","Eliminar respaldos","Desactivar alertas"],0]],"words":[{"word":"PLAZO","clue":"Tiempo límite en el que un sistema debe responder."},{"word":"REDUNDANCIA","clue":"Uso de componentes duplicados para mantener el servicio ante una falla."}]}];
let student=null,current=0,wordIndex=0,wrong=0,solved=0,usedLetters=[],wordFinished=false;
const $=id=>document.getElementById(id);
const key=()=>`unisimon_eval_${student?.name?.toLowerCase()}_${student?.semester}`;
function getRecord(){return JSON.parse(localStorage.getItem(key())||'{"scores":{}}')}
function saveRecord(r){localStorage.setItem(key(),JSON.stringify(r))}
function show(id){['login','home','topic','results','admin'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function completed(){return getRecord().scores}
function topicDone(i){const r=getRecord();return r.scores[i]!==undefined && !!(r.downloads&&r.downloads[i]);}
function renderHome(){
 $('greeting').textContent=`${tr('Estudiante:')} ${student.name} · ${student.semester}`;
 const scores=completed(),done=TOPICS.filter((_,i)=>topicDone(i)).length;
 $('progressText').textContent=language==='en'?`${done} of 4 topics completed`:`${done} de 4 temas completados`;$('progressBar').style.width=(done/4*100)+'%';
 $('topicGrid').innerHTML=TOPICS.map((t,i)=>`<button class="topic-card" data-topic="${i}" ${i>0&&!topicDone(i-1)?'disabled':''}><span>${tr('TEMA')} ${i+1}</span><b>${(language==='en'?EN_TOPICS[i].title:t.title).replace(/^(Tema|Topic) \d: /,'')}</b><span>${topicDone(i)?`✓ ${tr('Tema completado')} · ${tr('Nota:')} ${scores[i].toFixed(1)}`:i>0&&!topicDone(i-1)?tr('Bloqueado · Completa el tema anterior'):scores[i]!==undefined?tr('Descarga el taller para completar el tema'):tr('Abrir tema →')}</span></button>`).join('');
 document.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>openTopic(+b.dataset.topic)));
}
function renderTopicContent(){
 const ovaPaths=['ovas/tema-1/index.html','ovas/tema-2/index.html','ovas/tema-3/index.html','ovas/tema-4/index.html'];
 const labels=language==='en'?['Open Topic 1 OVA','Open Topic 2 OVA','Open Topic 3 OVA','Open Topic 4 OVA']:['Abrir OVA del Tema 1','Abrir OVA del Tema 2','Abrir OVA del Tema 3','Abrir OVA del Tema 4'];
 const descriptions=language==='en'?['Open the complete learning resource about virtual memory.','Open the complete learning resource about input and output.','Open the complete learning resource about operating-system security.','Open the complete learning resource about real-time systems, embedded systems and fault tolerance.']:['Abre el OVA completo sobre memoria virtual.','Abre el OVA completo sobre entrada y salida.','Abre el OVA completo sobre seguridad en sistemas operativos.','Abre el OVA completo sobre sistemas en tiempo real, sistemas embebidos y tolerancia a fallos.'];
 $('topicContent').innerHTML=`<div class="ova-launch"><b>${language==='en'?'Interactive learning resource':'Recurso de aprendizaje interactivo'}</b><p>${descriptions[current]}</p><a class="button primary" href="${ovaPaths[current]}" target="_blank" rel="noopener">${labels[current]} ↗</a></div>`;
}
function openTopic(i){current=i;const t=TOPICS[i];$('topicNumber').textContent=`${tr('TEMA')} ${i+1}`;$('topicTitle').textContent=topicTitle(i).replace(/^(Tema|Topic) \d: /,'');
 renderTopicContent();
 $('pdfLink').href=`talleres/Taller_${t.slug}.pdf`;$('pdfLink').onclick=()=>{const r=getRecord();r.downloads=r.downloads||{};r.downloads[current]=true;saveRecord(r);};$('gameArea').classList.add('hidden');$('gameResult').classList.add('hidden');$('startGame').disabled=false;$('startGame').textContent=tr('Iniciar juego');show('topic');}
function startGame(){wordIndex=0;wrong=0;solved=0;usedLetters=[];wordFinished=false;$('gameTitle').textContent=tr('Ahorcado de conceptos');$('gameResult').classList.add('hidden');$('gameArea').classList.remove('hidden');renderHangman();$('gameArea').scrollIntoView({behavior:'smooth'});}
function renderHangman(){const item=topicWords()[wordIndex],word=item.word;const won=word.split('').every(ch=>usedLetters.includes(ch));
 const parts=[wrong>=1?'<circle cx="115" cy="35" r="13" />':'',wrong>=2?'<line x1="115" y1="48" x2="115" y2="88" />':'',wrong>=3?'<line x1="115" y1="58" x2="94" y2="76" />':'',wrong>=4?'<line x1="115" y1="58" x2="136" y2="76" />':'',wrong>=5?'<line x1="115" y1="88" x2="96" y2="112" />':'',wrong>=6?'<line x1="115" y1="88" x2="134" y2="112" />':''].join('');
 $('quiz').innerHTML=`<div class="hangman-wrap"><div class="hangman-info"><span>${tr('Palabra')} ${wordIndex+1} ${tr('de')} 2</span><span>${tr('Errores:')} ${wrong} / 6</span></div><div class="hangman-drawing" aria-label="Ahorcado: ${wrong} errores"><svg class="hangman-svg" viewBox="0 0 190 135" role="img" aria-label="${tr('Dibujo del ahorcado')}"><g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M25 126 H160 M55 126 V10 H115 V22" />${parts}</g></svg></div><p class="clue"><b>${tr('Pista:')}</b> ${item.clue}</p><p class="word-blanks">${word.split('').map(ch=>usedLetters.includes(ch)?ch:'_').join(' ')}</p><p class="game-instruction">${tr('Adivina la palabra usando la pista y seleccionando sus letras. Tienes hasta 6 errores.')}</p><div class="letter-board">${(language==='en'?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ').split('').map(ch=>`<button class="letter-btn" data-letter="${ch}" ${usedLetters.includes(ch)||wordFinished?'disabled':''}>${ch}</button>`).join('')}</div><div class="word-feedback" id="wordFeedback">${wordFinished?(won?tr('¡Correcto!'):tr('Se acabaron los intentos. La palabra era')+' '+word):tr('Lee la pista y selecciona una letra para comenzar.')}</div><button id="nextWord" class="primary" ${!wordFinished?'disabled':''}>${wordIndex===1?tr('Ver resultado'):tr('Siguiente palabra')}</button></div>`;
 document.querySelectorAll('[data-letter]').forEach(b=>b.addEventListener('click',()=>guessLetter(b.dataset.letter)));
 $('nextWord').addEventListener('click',advanceWord);
}
function guessLetter(letter){if(wordFinished)return;usedLetters.push(letter);const word=topicWords()[wordIndex].word;if(!word.includes(letter))wrong++;const won=word.split('').every(ch=>usedLetters.includes(ch));if(won){solved++;wordFinished=true;}else if(wrong>=6){wordFinished=true;}renderHangman();}
function advanceWord(){if(!wordFinished)return;if(wordIndex<1){wordIndex++;wrong=0;usedLetters=[];wordFinished=false;renderHangman();}else finishGame();}
function finishGame(){const grade=Math.round((solved/2)*50)/10;const r=getRecord();r.scores[current]=grade;saveRecord(r);$('liveScore').textContent=grade.toFixed(1);$('gameResult').textContent=language==='en'?`Result: ${solved} of 2 words guessed. Game grade: ${grade.toFixed(1)} / 5.0`:`Resultado: ${solved} de 2 palabras adivinadas. Nota del juego: ${grade.toFixed(1)} / 5.0`;$('gameResult').classList.remove('hidden');$('quiz').innerHTML=`<p class="game-instruction">${tr('¡Juego terminado! Puedes volver a los temas para continuar.')}</p>`;$('submitGame').classList.add('hidden');renderHome();}
// Panel docente local: consulta los registros guardados en este navegador.
const ADMIN_USER='docente';
const ADMIN_PASS='Unisimon2026!';
function showAdminLogin(){const u=prompt(language==='en'?'Admin username':'Usuario administrador');if(u===null)return;const p=prompt(language==='en'?'Admin password':'Contraseña de administrador');if(p===null)return;if(u===ADMIN_USER&&p===ADMIN_PASS){renderAdmin();show('admin');}else alert(language==='en'?'Incorrect admin credentials.':'Credenciales de administrador incorrectas.');}
function renderAdmin(){
 const rows=[];
 for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith('unisimon_eval_'))continue;try{const r=JSON.parse(localStorage.getItem(k)||'{}');const who=k.replace('unisimon_eval_','').replace(/_([^_]*)$/,' · $1');for(let t=0;t<TOPICS.length;t++){const score=r.scores&&r.scores[t];rows.push({who,topic:TOPICS[t].title,score:score===undefined?'—':Number(score).toFixed(1),download:r.downloads&&r.downloads[t]?'Sí':'No',done:score!==undefined&&r.downloads&&r.downloads[t]?'Completado':'Pendiente'});}}catch(e){}}
 $('adminRows').innerHTML=rows.length?rows.map(x=>`<tr><td>${escapeHtml(x.who)}</td><td>${escapeHtml(x.topic)}</td><td>${x.score}</td><td>${x.download}</td><td>${x.done}</td></tr>`).join(''):`<tr><td colspan="5">${language==='en'?'No student records are stored in this browser yet.':'Todavía no hay registros de estudiantes en este navegador.'}</td></tr>`;
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
$('adminAccess').addEventListener('click',showAdminLogin);
$('adminBack').addEventListener('click',()=>show('login'));
$('adminRefresh').addEventListener('click',renderAdmin);
$('loginForm').addEventListener('submit',e=>{e.preventDefault();student={name:$('studentName').value.trim(),semester:$('semester').value};renderHome();show('home')});
$('logout').onclick=()=>{student=null;show('login')};$('back').onclick=()=>{renderHome();show('home')};$('startGame').onclick=()=>{ $('submitGame').classList.add('hidden');$('liveScore').textContent='—';startGame();};$('submitGame').onclick=finishGame;$('returnHome').onclick=()=>{renderHome();show('home')};

// Selector de idioma: español original / inglés
let language='es';
const EN={
 'Traducir':'Translate to English','Volver a español':'Translate to Spanish',
 'Universidad Simón Bolívar':'Simon Bolivar University','Ingeniería de Sistemas · Plataforma académica':'Systems Engineering · Academic platform',
 'ÁREA DE APRENDIZAJE':'LEARNING AREA','Bienvenido':'Welcome','Ingresa tus datos para comenzar.':'Enter your details to get started.',
 'Nombre completo':'Full name','Tu nombre completo':'Your full name','Semestre que cursas':'Current semester','Selecciona':'Select','Ingresar':'Sign in',
 'RECORRIDO ACADÉMICO':'LEARNING PATH','Selecciona un tema':'Choose a topic','Cerrar sesión':'Log out',
 'Progreso de temas':'Topic progress','0 de 4 completados':'0 of 4 completed','Completa el juego de cada tema para desbloquear el siguiente.':'Download the workshop and complete the game to unlock the next topic.',
 'Volver a temas':'Back to topics','Contenido del tema':'Topic content','Contenido pendiente de integración':'Content pending integration',
 'En este espacio se incorporará el archivo HTML que entreguen los integrantes responsables de este tema. El contenido se mostrará aquí, sin secciones adicionales.':'The HTML file provided by the team responsible for this topic will be added here. Its content will appear here, without additional sections.',
 'Descargar taller PDF':'Download workshop PDF','Iniciar juego':'Start game','EVALUACIÓN DEL JUEGO':'GAME ASSESSMENT','Nota:':'Grade:',
 'Finalizar y calcular nota':'Finish and calculate grade','RESULTADOS':'RESULTS','Mis calificaciones':'My grades','Volver a los temas':'Back to topics',
 'Juego completado':'Game completed','Tema completado':'Topic completed','Descarga el taller para completar el tema':'Download the workshop to complete the topic','Pista:':'Clue:','Lee la pista y selecciona una letra para comenzar.':'Read the clue and select a letter to begin.','Adivina la palabra usando la pista y seleccionando sus letras. Tienes hasta 6 errores.':'Guess the word using the clue and selecting its letters. You have up to 6 mistakes.','Dibujo del ahorcado':'Hangman drawing','Bloqueado · Completa el tema anterior':'Locked · Complete the previous topic','Abrir tema →':'Open topic →',
 'Ahorcado de conceptos':'Word Guessing Game','Palabra':'Word','de':'of','Errores:':'Mistakes:','Adivina la palabra seleccionando sus letras. Tienes hasta 7 errores.':'Guess the word by selecting its letters. You have up to 7 mistakes.',
 '¡Correcto!':'Correct!','Se acabaron los intentos. La palabra era':'No attempts left. The word was','Selecciona una letra para comenzar.':'Select a letter to begin.',
 'Ver resultado':'See result','Descarga el taller y completa el juego para desbloquear el siguiente tema.':'Download the workshop and complete the game to unlock the next topic.','Siguiente palabra':'Next word','Resultado:':'Result:','palabras adivinadas. Nota del juego:':'words guessed. Game grade:','¡Juego terminado! Puedes volver a los temas para continuar.':'Game finished! You can return to the topics to continue.',
 'TEMA':'TOPIC','Estudiante:':'Student:'
};
const EN_TOPICS=[
 {title:'Topic 1: Virtual memory',words:[{word:'PAGE',clue:'A fixed-size block into which virtual memory is divided.'},{word:'FRAME',clue:'A space in RAM where a page is loaded.'}]},
 {title:'Topic 2: Input/Output',words:[{word:'CONTROLLER',clue:'A component that coordinates communication between the system and a device.'},{word:'PERIPHERAL',clue:'An external device used for data input or output.'}]},
 {title:'Topic 3: Security',words:[{word:'ENCRYPTION',clue:'A technique that transforms information so it cannot be read without authorization.'},{word:'FIREWALL',clue:'A security barrier that filters network traffic.'}]},
 {title:'Topic 4: Real-time systems, embedded systems and fault tolerance',words:[{word:'DEADLINE',clue:'The time limit within which a system must respond.'},{word:'REDUNDANCY',clue:'The use of duplicate components to keep a service running after a failure.'}]}
];
function tr(s){return language==='en'?(EN[s]||s):s;}
function topicTitle(i){return language==='en'?EN_TOPICS[i].title:TOPICS[i].title;}
function topicWords(){return language==='en'?EN_TOPICS[current].words:TOPICS[current].words;}
function applyLanguage(){
 document.documentElement.lang=language;
 $('translateBtn').textContent=language==='es'?'Traducir':'Volver a español';
 const staticMap=[['.brand b','Universidad Simón Bolívar'],['.brand small','Ingeniería de Sistemas · Plataforma académica'],['#themeBtn','Tema oscuro'],['#login .eyebrow','ÁREA DE APRENDIZAJE'],['#login h1','Bienvenido'],['#login .muted','Ingresa tus datos para comenzar.'],['#login label:nth-of-type(1)','Nombre completo'],['#login label:nth-of-type(2)','Semestre que cursas'],['#loginForm button','Ingresar'],['#home .eyebrow','RECORRIDO ACADÉMICO'],['#home h1','Selecciona un tema'],['#logout','Cerrar sesión'],['.progress b','Progreso de temas'],['.progress small','Descarga el taller y completa el juego para desbloquear el siguiente tema.'],['#back','← Volver a temas'],['.content h2','Contenido del tema'],['#pdfLink','↓ Descargar taller PDF'],['#startGame','Iniciar juego'],['.game-top .eyebrow','EVALUACIÓN DEL JUEGO'],['#submitGame','Finalizar y calcular nota'],['#results .eyebrow','RESULTADOS'],['#results h1','Mis calificaciones'],['#returnHome','Volver a los temas']];
 staticMap.forEach(([sel,es])=>{const el=document.querySelector(sel);if(el)el.textContent=language==='en'?tr(es):es;});
 $('studentName').placeholder=language==='en'?'Your full name':'Tu nombre completo';
 $('semester').options[0].text=language==='en'?'Select':'Selecciona';
 [...$('semester').options].slice(1).forEach((o,i)=>o.text=language==='en'?`${i+1}${['st','nd','rd'][i]||'th'} semester`:`${i+1}.º semestre`);
 if(!$('login').classList.contains('hidden')){};
 if(!$('home').classList.contains('hidden'))renderHome();
 if(!$('topic').classList.contains('hidden')){ $('topicNumber').textContent=`${tr('TEMA')} ${current+1}`;$('topicTitle').textContent=topicTitle(current);renderTopicContent();if(!$('gameArea').classList.contains('hidden'))renderHangman();}
 if(!$('results').classList.contains('hidden'))renderHome();
 applyTheme(); // Mantiene el texto del selector de tema sincronizado con el idioma y el modo activo.
}
$('translateBtn').addEventListener('click',()=>{language=language==='es'?'en':'es';applyLanguage();});

const themeBtn=$('themeBtn');
function applyTheme(){
 const dark=localStorage.getItem('unisimon_theme')==='dark';
 document.body.classList.toggle('dark-theme',dark);
 themeBtn.textContent=dark?(language==='en'?'Light theme':'Tema claro'):(language==='en'?'Dark theme':'Tema oscuro');
 themeBtn.setAttribute('aria-pressed',dark?'true':'false');
}
themeBtn.addEventListener('click',()=>{
 const dark=!document.body.classList.contains('dark-theme');
 localStorage.setItem('unisimon_theme',dark?'dark':'light');applyTheme();
});
applyTheme();
