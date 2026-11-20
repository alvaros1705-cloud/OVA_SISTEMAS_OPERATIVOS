const bancoUnidades = [
  {
    id: "memoria-virtual",
    slug: "memoria-virtual",
    orden: 1,
    titulo: { es: "Memoria virtual", en: "Virtual memory" },
    subtitulo: {
      es: "MEMORIA VIRTUAL",
      en: "VIRTUAL MEMORY"
    },
    descripcion: {
      es: "Comprende cómo el sistema operativo <strong>abstrae la memoria física</strong> y administra la <em>paginación</em>, los <em>fallos de página</em> y el <strong>espacio de intercambio</strong> para ejecutar procesos de forma segura y eficiente.",
      en: "Understand how the operating system <strong>abstracts physical memory</strong> and manages <em>paging</em>, <em>page faults</em> and <strong>swap space</strong> to run processes safely and efficiently."
    },
    comando: "$ kernel_init --module=memoria_virtual",
    autor: "Nombre del autor",
    ruta: "temas/tema1/OVA_corte1.html",
    icono: "01",
    preguntas: [
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
    ]
  },
  {
    id: "procesos-planificacion",
    slug: "procesos-planificacion",
    orden: 2,
    titulo: { es: "Procesos y planificación", en: "Processes & scheduling" },
    subtitulo: {
      es: "PROCESOS Y PLANIFICACIÓN",
      en: "PROCESSES & SCHEDULING"
    },
    descripcion: {
      es: "Analiza cómo el sistema operativo <strong>crea, organiza y planifica los procesos</strong>, aplicando algoritmos como <em>FCFS</em>, <em>SJF</em>, <em>Round Robin</em> y <strong>prioridades</strong> para repartir la CPU de forma justa y eficiente.",
      en: "Analyze how the operating system <strong>creates, organizes and schedules processes</strong>, applying algorithms such as <em>FCFS</em>, <em>SJF</em>, <em>Round Robin</em> and <strong>priority scheduling</strong> to share the CPU fairly and efficiently."
    },
    comando: "$ kernel_init --module=procesos_planificacion",
    autor: "Nombre del autor",
    ruta: "temas/tema2/OVA_corte2.html",
    icono: "02",
    preguntas: [
      {
        id: 1,
        correcta: 1,
        es: {
          titulo: "¿Qué algoritmo atiende los procesos en orden de llegada?",
          opciones: [
            "Round Robin",
            "FCFS (FIFO)",
            "SJF",
            "Prioridades"
          ]
        },
        en: {
          titulo: "Which algorithm serves processes in the order they arrive?",
          opciones: [
            "Round Robin",
            "FCFS (FIFO)",
            "SJF",
            "Priority scheduling."
          ]
        }
      },
      {
        id: 2,
        correcta: 0,
        es: {
          titulo: "Verdadero o falso: Round Robin utiliza un quantum de tiempo para repartir la CPU.",
          opciones: [
            "Verdadero",
            "Falso"
          ]
        },
        en: {
          titulo: "True or false: Round Robin uses a time quantum to share the CPU.",
          opciones: [
            "True",
            "False"
          ]
        }
      },
      {
        id: 3,
        correcta: 0,
        es: {
          titulo: "Verdadero o falso: SJF selecciona el proceso con la ráfaga de CPU más corta.",
          opciones: [
            "Verdadero",
            "Falso"
          ]
        },
        en: {
          titulo: "True or false: SJF selects the process with the shortest CPU burst.",
          opciones: [
            "True",
            "False"
          ]
        }
      },
      {
        id: 4,
        correcta: 1,
        es: {
          titulo: "Verdadero o falso: En la planificación no expulsiva el SO puede quitarle la CPU a un proceso en cualquier momento.",
          opciones: [
            "Verdadero",
            "Falso"
          ]
        },
        en: {
          titulo: "True or false: In non-preemptive scheduling the OS can take the CPU away from a process at any time.",
          opciones: [
            "True",
            "False"
          ]
        }
      },
      {
        id: 5,
        correcta: 1,
        es: {
          titulo: "¿Qué componente entrega la CPU al proceso elegido por el planificador?",
          opciones: [
            "Cargador",
            "Despachador (dispatcher)",
            "Compilador",
            "Intérprete"
          ]
        },
        en: {
          titulo: "Which component hands the CPU to the process chosen by the scheduler?",
          opciones: [
            "Loader",
            "Dispatcher",
            "Compiler",
            "Interpreter"
          ]
        }
      },
      {
        id: 6,
        correcta: 3,
        es: {
          titulo: "¿Cuál NO es un estado clásico de un proceso?",
          opciones: [
            "Listo",
            "En ejecución",
            "Bloqueado",
            "Compilado"
          ]
        },
        en: {
          titulo: "Which is NOT a classic process state?",
          opciones: [
            "Ready",
            "Running",
            "Blocked",
            "Compiled"
          ]
        }
      },
      {
        id: 7,
        correcta: 0,
        es: {
          titulo: "Verdadero o falso: El tiempo de espera es el tiempo que un proceso pasa en la cola de listos.",
          opciones: [
            "Verdadero",
            "Falso"
          ]
        },
        en: {
          titulo: "True or false: Waiting time is the time a process spends in the ready queue.",
          opciones: [
            "True",
            "False"
          ]
        }
      },
      {
        id: 8,
        correcta: 0,
        es: {
          titulo: "¿Qué problema puede sufrir la planificación por prioridades?",
          opciones: [
            "Inanición (starvation)",
            "Fragmentación",
            "Desbordamiento de pila",
            "Colisiones de red"
          ]
        },
        en: {
          titulo: "What problem can priority scheduling suffer from?",
          opciones: [
            "Starvation",
            "Fragmentation",
            "Stack overflow",
            "Network collisions"
          ]
        }
      },
      {
        id: 9,
        correcta: 0,
        es: {
          titulo: "Verdadero o falso: Si el quantum de Round Robin es muy grande, se comporta como FCFS.",
          opciones: [
            "Verdadero",
            "Falso"
          ]
        },
        en: {
          titulo: "True or false: If the Round Robin quantum is very large, it behaves like FCFS.",
          opciones: [
            "True",
            "False"
          ]
        }
      },
      {
        id: 10,
        correcta: 0,
        es: {
          titulo: "¿Cómo se llama la estructura donde el SO guarda la información de un proceso?",
          opciones: [
            "PCB",
            "BIOS",
            "MMU",
            "TLB"
          ]
        },
        en: {
          titulo: "What is the structure where the OS stores a process's information?",
          opciones: [
            "PCB",
            "BIOS",
            "MMU",
            "TLB"
          ]
        }
      }
    ]
  },
  {
    id: "sistemas-archivos",
    slug: "sistemas-archivos",
    orden: 3,
    titulo: { es: "Sistemas de archivos", en: "File systems" },
    subtitulo: {
      es: "SISTEMAS DE ARCHIVOS",
      en: "FILE SYSTEMS"
    },
    descripcion: {
      es: "Explora cómo el sistema operativo <strong>organiza los datos en disco</strong>: <em>inodos</em>, asignación de bloques, <em>VFS</em>, <strong>journaling</strong> y sistemas de archivos modernos con <em>Copy-on-Write</em>.",
      en: "Explore how the operating system <strong>organizes data on disk</strong>: <em>inodes</em>, block allocation, <em>VFS</em>, <strong>journaling</strong> and modern <em>Copy-on-Write</em> file systems."
    },
    comando: "$ kernel_init --module=sistemas_archivos",
    autor: "Nombre del autor",
    ruta: "temas/tema3/index.html",
    icono: "03",
    preguntas: [
      {
        id: 1,
        correcta: 1,
        es: {
          titulo: "¿Qué capa de la arquitectura del sistema de archivos traduce las direcciones de bloques lógicos de un archivo en direcciones de bloques físicos y administra el espacio libre?",
          opciones: [
            "Control de E/S (Device Drivers)",
            "Módulo de Organización de Archivos (File-Organization Module)",
            "Programas de Aplicación",
            "Dispositivos físicos de almacenamiento"
          ]
        },
        en: {
          titulo: "Which file system architecture layer translates a file's logical block addresses into physical block addresses and manages free space?",
          opciones: [
            "I/O control (Device Drivers)",
            "File-Organization Module",
            "Application Programs",
            "Physical storage devices"
          ]
        }
      },
      {
        id: 2,
        correcta: 1,
        es: {
          titulo: "¿Qué ocurre exactamente en Linux si creas un enlace duro (ln) y un enlace simbólico (ln -s) hacia 'datos.txt' y posteriormente eliminas 'datos.txt' con rm?",
          opciones: [
            "Ambos enlaces quedan rotos porque los bloques de datos se liberan de inmediato",
            "El enlace duro sigue accediendo a los datos intactos; el enlace simbólico queda roto (dangling)",
            "El enlace simbólico conserva los datos y el enlace duro se borra automáticamente",
            "El kernel impide borrar 'datos.txt' mientras existan enlaces"
          ]
        },
        en: {
          titulo: "In Linux, you create a hard link (ln) and a symbolic link (ln -s) to 'datos.txt' and then delete 'datos.txt' with rm. What happens?",
          opciones: [
            "Both links break because the data blocks are freed immediately",
            "The hard link keeps accessing the intact data; the symbolic link becomes broken (dangling)",
            "The symbolic link keeps the data and the hard link is deleted automatically",
            "The kernel prevents deleting 'datos.txt' while links exist"
          ]
        }
      },
      {
        id: 3,
        correcta: 1,
        es: {
          titulo: "En un sistema UNIX con bloques de 4 KB (4,096 bytes) y punteros de 4 bytes, ¿cuántos bloques de datos puede direccionar únicamente el puntero Indirecto Doble de un inodo?",
          opciones: [
            "1,024 bloques (4 MB)",
            "1,048,576 bloques (4 GB)",
            "12 bloques (48 KB)",
            "1,073,741,824 bloques (4 TB)"
          ]
        },
        en: {
          titulo: "In a UNIX system with 4 KB (4,096-byte) blocks and 4-byte pointers, how many data blocks can the inode's double indirect pointer alone address?",
          opciones: [
            "1,024 blocks (4 MB)",
            "1,048,576 blocks (4 GB)",
            "12 blocks (48 KB)",
            "1,073,741,824 blocks (4 TB)"
          ]
        }
      },
      {
        id: 4,
        correcta: 1,
        es: {
          titulo: "¿Cuál es la diferencia fundamental entre los timestamps mtime (Modified) y ctime (Changed) en un inodo POSIX?",
          opciones: [
            "mtime registra la creación del archivo y ctime su última lectura",
            "mtime registra cambios en el contenido del archivo; ctime registra cambios en los metadatos del inodo (permisos, dueño, enlaces)",
            "Son idénticos en todos los sistemas de archivos modernos",
            "ctime solo se utiliza en particiones FAT32"
          ]
        },
        en: {
          titulo: "What is the fundamental difference between the mtime (Modified) and ctime (Changed) timestamps in a POSIX inode?",
          opciones: [
            "mtime records file creation and ctime the last read",
            "mtime records changes to file content; ctime records changes to inode metadata (permissions, owner, links)",
            "They are identical in all modern file systems",
            "ctime is only used on FAT32 partitions"
          ]
        }
      },
      {
        id: 5,
        correcta: 1,
        es: {
          titulo: "¿Por qué el Virtual File System (VFS) es indispensable en los kernels modernos como Linux?",
          opciones: [
            "Porque reemplaza la necesidad de drivers de hardware",
            "Porque proporciona una interfaz orientada a objetos uniforme que permite operar simultáneamente sobre múltiples sistemas de archivos distintos (ext4, NTFS, FAT32, NFS)",
            "Porque comprime automáticamente todos los archivos en memoria RAM",
            "Porque elimina la tabla de archivos abiertos por proceso"
          ]
        },
        en: {
          titulo: "Why is the Virtual File System (VFS) essential in modern kernels such as Linux?",
          opciones: [
            "Because it replaces the need for hardware drivers",
            "Because it provides a uniform object-oriented interface that allows operating simultaneously on multiple different file systems (ext4, NTFS, FAT32, NFS)",
            "Because it automatically compresses all files in RAM",
            "Because it removes the per-process open-file table"
          ]
        }
      },
      {
        id: 6,
        correcta: 1,
        es: {
          titulo: "¿Cuál es la principal desventaja de la Asignación Contigua de bloques en disco?",
          opciones: [
            "El acceso aleatorio es O(n) muy lento",
            "Genera fragmentación externa y dificulta el crecimiento dinámico de los archivos",
            "Desperdicia un bloque completo por archivo para almacenar índices",
            "No permite lectura secuencial rápida"
          ]
        },
        en: {
          titulo: "What is the main disadvantage of contiguous block allocation on disk?",
          opciones: [
            "Random access is O(n) and very slow",
            "It causes external fragmentation and makes dynamic file growth difficult",
            "It wastes a full block per file to store indexes",
            "It does not allow fast sequential reads"
          ]
        }
      },
      {
        id: 7,
        correcta: 1,
        es: {
          titulo: "¿Qué técnica emplea el sistema de archivos FAT para resolver la lentitud del acceso aleatorio de la asignación enlazada pura?",
          opciones: [
            "Usa inodos de triple indirección",
            "Extrae todos los punteros de los bloques y los concentra en una tabla dedicada (FAT) que puede cachearse en RAM",
            "Obliga a todos los archivos a ser contiguos",
            "Almacena los archivos dentro del sector de arranque MBR"
          ]
        },
        en: {
          titulo: "Which technique does the FAT file system use to solve the slow random access of pure linked allocation?",
          opciones: [
            "It uses triple-indirection inodes",
            "It extracts all pointers from the blocks and concentrates them in a dedicated table (FAT) that can be cached in RAM",
            "It forces all files to be contiguous",
            "It stores files inside the MBR boot sector"
          ]
        }
      },
      {
        id: 8,
        correcta: 0,
        es: {
          titulo: "¿Cuánta memoria ocupa un Vector de Bits (Bitmap) de espacio libre para gestionar un disco de 512 GB con bloques de 4 KB?",
          opciones: [
            "16 MB",
            "128 MB",
            "1 GB",
            "4 KB"
          ]
        },
        en: {
          titulo: "How much memory does a free-space bitmap need to manage a 512 GB disk with 4 KB blocks?",
          opciones: [
            "16 MB",
            "128 MB",
            "1 GB",
            "4 KB"
          ]
        }
      },
      {
        id: 9,
        correcta: 1,
        es: {
          titulo: "En sistemas con Journaling como ext4, ¿qué garantiza el modo 'data=ordered' (predeterminado)?",
          opciones: [
            "Que tanto datos como metadatos se escriben dos veces en el diario",
            "Que los bloques de datos se escriben en el disco principal ANTES de confirmar (commit) sus metadatos en el diario, evitando apuntar a datos basura tras un apagón",
            "Que no se utiliza diario para maximizar velocidad",
            "Que los archivos se ordenan alfabéticamente en el disco"
          ]
        },
        en: {
          titulo: "In journaling file systems such as ext4, what does the 'data=ordered' mode (the default) guarantee?",
          opciones: [
            "Both data and metadata are written twice to the journal",
            "Data blocks are written to the main disk BEFORE committing their metadata to the journal, preventing pointers to garbage data after a power loss",
            "The journal is not used in order to maximize speed",
            "Files are sorted alphabetically on disk"
          ]
        }
      },
      {
        id: 10,
        correcta: 1,
        es: {
          titulo: "¿Qué principio arquitectónico caracteriza a sistemas modernos como ZFS, Btrfs y APFS frente a ext4?",
          opciones: [
            "Asignación contigua estática sin metadatos",
            "Copy-on-Write (CoW): nunca sobrescriben bloques activos en su lugar, escriben en bloques nuevos y actualizan punteros atómicamente",
            "Uso exclusivo de tablas FAT de 32 bits",
            "Ausencia total de verificación de integridad"
          ]
        },
        en: {
          titulo: "Which architectural principle characterizes modern systems such as ZFS, Btrfs and APFS compared with ext4?",
          opciones: [
            "Static contiguous allocation without metadata",
            "Copy-on-Write (CoW): they never overwrite active blocks in place; they write to new blocks and update pointers atomically",
            "Exclusive use of 32-bit FAT tables",
            "Total absence of integrity verification"
          ]
        }
      }
    ]
  }
];

const plataformaCorte03 = "temas/tema3/plataforma_unisimon_ovas_admin_jonatan";

const cortes = [
  {
    id: "corte01",
    slug: "corte-01",
    orden: 1,
    titulo: { es: "Máquinas, kernel y archivos", en: "Machines, kernel & files" },
    subtitulo: {
      es: "MÁQUINAS VIRTUALES · KERNEL · ARCHIVOS",
      en: "VIRTUAL MACHINES · KERNEL · FILES"
    },
    descripcion: {
      es: "Recorre la capa base del sistema operativo: <strong>máquinas virtuales</strong> y <em>arranque del kernel</em>, organización de <strong>sistemas de archivos</strong> y gestión de <em>procesos</em>, con espacios para talleres y juegos.",
      en: "Explore the operating system's foundation: <strong>virtual machines</strong> and <em>kernel booting</em>, <strong>file system</strong> organization and <em>process</em> management, plus workshops and games."
    },
    comando: "$ kernel_init --module=maquinas_virtuales",
    icono: "01",
    claveRespuestas: "sistemas-archivos",
    activos: [
      {
        titulo: { es: "Máquinas virtuales", en: "Virtual machines" },
        etiqueta: { es: "OVAs base", en: "Core OVAs" },
        ruta: "temas/tema1/OVA_corte1.html",
        seccion: { tipo: "corte1", indice: 0, hash: "maquina-virtual" }
      },
      {
        titulo: { es: "Kernel y booting", en: "Kernel & booting" },
        etiqueta: { es: "OVAs base", en: "Core OVAs" },
        ruta: "temas/tema1/OVA_corte1.html",
        seccion: { tipo: "corte1", indice: 1, hash: "kernel-booting" }
      },
      {
        titulo: { es: "Sistemas de archivos", en: "File systems" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema3/index.html",
        seccion: { tipo: "archivo", pagina: "sistemas-archivos" }
      },
      {
        titulo: { es: "Procesos", en: "Processes" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "inicio" }
      },
      {
        titulo: { es: "Talleres y juegos", en: "Workshops & games" },
        etiqueta: { es: "Actividades", en: "Activities" },
        ruta: "temas/tema1/OVA_corte1.html",
        seccion: { tipo: "corte1", indice: 0, hash: "talleres" }
      }
    ],
    preguntas: bancoUnidades[2].preguntas
  },
  {
    id: "corte02",
    slug: "corte-02",
    orden: 2,
    titulo: { es: "Procesos, hilos y concurrencia", en: "Processes, threads & concurrency" },
    subtitulo: {
      es: "PLANIFICACIÓN · DISTRIBUIDOS · CONCURRENCIA · MEMORIA",
      en: "SCHEDULING · DISTRIBUTED · CONCURRENCY · MEMORY"
    },
    descripcion: {
      es: "Profundiza en la <strong>planificación de procesos</strong>, los <em>sistemas distribuidos</em> con sockets e hilos, la <strong>concurrencia</strong> y la administración de <em>memoria</em> desde la perspectiva del kernel.",
      en: "Dive into <strong>process scheduling</strong>, <em>distributed systems</em> with sockets and threads, <strong>concurrency</strong> and kernel-level <em>memory</em> management."
    },
    comando: "$ kernel_init --module=planificacion_procesos",
    icono: "02",
    claveRespuestas: "procesos-planificacion",
    activos: [
      {
        titulo: { es: "Planificación de procesos", en: "Process scheduling" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "laboratorio", laboratorio: "sched" }
      },
      {
        titulo: { es: "Sistemas distribuidos: sockets e hilos", en: "Distributed systems: sockets & threads" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "distribuidos" }
      },
      {
        titulo: { es: "Concurrencia de procesos", en: "Process concurrency" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "hilos" }
      },
      {
        titulo: { es: "Memoria", en: "Memory" },
        etiqueta: { es: "Temas", en: "Topics" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "aplicaciones" }
      },
      {
        titulo: { es: "Talleres y juegos", en: "Workshops & games" },
        etiqueta: { es: "Actividades", en: "Activities" },
        ruta: "temas/tema2/OVA_corte2.html",
        seccion: { tipo: "corte2", pagina: "inicio" }
      }
    ],
    preguntas: bancoUnidades[1].preguntas
  },
  {
    id: "corte03",
    slug: "corte-03",
    orden: 3,
    titulo: { es: "Memoria, E/S y seguridad", en: "Memory, I/O & security" },
    subtitulo: {
      es: "MEMORIA VIRTUAL · E/S · SEGURIDAD · TIEMPO REAL",
      en: "VIRTUAL MEMORY · I/O · SECURITY · REAL TIME"
    },
    descripcion: {
      es: "Cierra el recorrido con <strong>memoria virtual</strong>, <em>entrada/salida</em>, <strong>seguridad</strong>, <em>sistemas de tiempo real</em>, embebidos y tolerancia a fallos, además de la <strong>evaluación final</strong> en la plataforma.",
      en: "Complete the journey with <strong>virtual memory</strong>, <em>input/output</em>, <strong>security</strong>, <em>real-time</em>, embedded and fault-tolerant systems, plus the <strong>final assessment</strong> on the platform."
    },
    comando: "$ kernel_init --module=memoria_virtual_io_seguridad",
    icono: "03",
    claveRespuestas: "memoria-virtual",
    activos: [
      {
        titulo: { es: "Plataforma de evaluación", en: "Assessment platform" },
        etiqueta: { es: "Plataforma", en: "Platform" },
        ruta: `${plataformaCorte03}/index.html`
      },
      {
        titulo: { es: "Memoria virtual", en: "Virtual memory" },
        etiqueta: { es: "Tema 01", en: "Topic 01" },
        ruta: `${plataformaCorte03}/ovas/tema-1/index.html`
      },
      {
        titulo: { es: "Entrada / Salida", en: "Input / Output" },
        etiqueta: { es: "Tema 02", en: "Topic 02" },
        ruta: `${plataformaCorte03}/ovas/tema-2/index.html`
      },
      {
        titulo: { es: "Seguridad en sistemas operativos", en: "Operating system security" },
        etiqueta: { es: "Tema 03", en: "Topic 03" },
        ruta: `${plataformaCorte03}/ovas/tema-3/index.html`
      },
      {
        titulo: { es: "Panel del kernel", en: "Kernel dashboard" },
        etiqueta: { es: "Tema 04", en: "Topic 04" },
        ruta: `${plataformaCorte03}/ovas/tema-4/index.html`
      },
      {
        titulo: { es: "Tolerancia a fallos", en: "Fault tolerance" },
        etiqueta: { es: "Tema 04", en: "Topic 04" },
        ruta: `${plataformaCorte03}/ovas/tema-4/tolerancia.html`
      },
      {
        titulo: { es: "Sistemas en tiempo real", en: "Real-time systems" },
        etiqueta: { es: "Tema 04", en: "Topic 04" },
        ruta: `${plataformaCorte03}/ovas/tema-4/tiempo-real.html`
      },
      {
        titulo: { es: "Sistemas embebidos", en: "Embedded systems" },
        etiqueta: { es: "Tema 04", en: "Topic 04" },
        ruta: `${plataformaCorte03}/ovas/tema-4/embebidos.html`
      },
      {
        titulo: { es: "Evaluación final", en: "Final assessment" },
        etiqueta: { es: "Evaluación", en: "Assessment" },
        ruta: `${plataformaCorte03}/ovas/tema-4/evaluacion.html`
      }
    ],
    preguntas: bancoUnidades[0].preguntas
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
    unitWord: "Corte",
    stepWord: "Paso",
    stepWordUpper: "CORTE",
    moduleProgress: "PROGRESO DEL CORTE",
    respondidas: "Respondidas: {n} de {total}",
    recursosTitulo: "OBJETOS VIRTUALES DE APRENDIZAJE",
    recursosLabel: "RECURSOS",
    recursoWord: "Recurso",
    abrirActivoAria: "Abrir en el lector",
    visitado: "Visitado",
    readerLabel: "OVA :: LECTURA",
    closeLabel: "Cerrar",
    openOva: "Abrir OVA",
    openOvaAria: "Abrir la OVA de este corte en el lector",
    estudianteLabel: "ESTUDIANTE",
    editarNombre: "Editar nombre",
    nombreEstudiante: "Nombre del estudiante",
    nombrePlaceholder: "Escribe tu nombre completo",
    iniciarSesion: "Iniciar sesión",
    guardarNombre: "Guardar nombre",
    explorarInvitado: "Explorar como invitado",
    invitado: "Invitado",
    bienvenidaTitulo: "Inicializando tu espacio de aprendizaje",
    bienvenidaTituloEditar: "Actualizar identidad",
    bienvenidaInstitucion: "Ingeniería de Sistemas · Universidad Simón Bolívar",
    bienvenidaDescripcion: "boot_ova_core preparó un recorrido con 3 Cortes, OVAs interactivos, talleres/juegos y evaluación final. Ingresa tu nombre para personalizar la sesión.",
    bienvenidaCortes: "3 Cortes con rutas y cuestionarios",
    bienvenidaOvas: "OVAs interactivos por tema",
    bienvenidaTalleres: "Talleres y juegos integrados",
    bienvenidaEvaluacion: "Evaluación y progreso global",
    verResumen: "Ver resumen global",
    resumenTitulo: "Resumen global",
    resumenSubtitulo: "kernel_report // desempeño por corte",
    rendimientoGlobal: "RENDIMIENTO GLOBAL",
    puntaje: "Puntaje",
    porcentaje: "Porcentaje",
    respondidasLabel: "Respondidas",
    visitadosLabel: "Recursos visitados",
    resumenDetalle: "{n} de {total} respuestas correctas · {v} recursos abiertos",
    reiniciarProgreso: "Reiniciar progreso",
    confirmarReinicio: "Confirmar reinicio"
  },
  en: {
    brandSubtitle: "kernel_learning // simon bolivar university",
    globalProgress: "GLOBAL PROGRESS",
    inProgress: "IN PROGRESS",
    completed: "COMPLETED",
    learningPath: "LEARNING PATH",
    unitWord: "Cut",
    stepWord: "Step",
    stepWordUpper: "CUT",
    moduleProgress: "CUT PROGRESS",
    respondidas: "Answered: {n} of {total}",
    recursosTitulo: "LEARNING OBJECTS",
    recursosLabel: "RESOURCES",
    recursoWord: "Resource",
    abrirActivoAria: "Open in the reader",
    visitado: "Visited",
    readerLabel: "OVA :: READ",
    closeLabel: "Close",
    openOva: "Open OVA",
    openOvaAria: "Open this cut's OVA in the reader",
    estudianteLabel: "STUDENT",
    editarNombre: "Edit name",
    nombreEstudiante: "Student name",
    nombrePlaceholder: "Enter your full name",
    iniciarSesion: "Start session",
    guardarNombre: "Save name",
    explorarInvitado: "Explore as guest",
    invitado: "Guest",
    bienvenidaTitulo: "Initializing your learning space",
    bienvenidaTituloEditar: "Update identity",
    bienvenidaInstitucion: "Systems Engineering · Simón Bolívar University",
    bienvenidaDescripcion: "boot_ova_core prepared a journey with 3 cuts, interactive OVAs, workshops/games and a final assessment. Enter your name to personalize the session.",
    bienvenidaCortes: "3 cuts with paths and quizzes",
    bienvenidaOvas: "Interactive OVAs by topic",
    bienvenidaTalleres: "Built-in workshops and games",
    bienvenidaEvaluacion: "Assessment and global progress",
    verResumen: "View global summary",
    resumenTitulo: "Global summary",
    resumenSubtitulo: "kernel_report // performance by cut",
    rendimientoGlobal: "GLOBAL PERFORMANCE",
    puntaje: "Score",
    porcentaje: "Percentage",
    respondidasLabel: "Answered",
    visitadosLabel: "Resources opened",
    resumenDetalle: "{n} of {total} correct answers · {v} resources opened",
    reiniciarProgreso: "Reset progress",
    confirmarReinicio: "Confirm reset"
  }
};

const CLAVE_RESPUESTAS = "ovaRespuestas";
const CLAVE_UNIDAD = "ovaUnidadActiva";
const CLAVE_IDIOMA = "ovaIdioma";
const CLAVE_ESTUDIANTE = "ovaEstudiante";
const CLAVE_VISITADOS = "ovaRecursosVisitados";

const preguntasEl = document.getElementById("preguntas");
const contadorRespondidas = document.getElementById("contadorRespondidas");
const barraModulo = document.getElementById("barraModulo");
const barraGlobal = document.getElementById("barraGlobal");
const pctGlobal = document.getElementById("pctGlobal");
const badgeGlobal = document.getElementById("badgeGlobal");
const rutaLista = document.getElementById("rutaLista");
const rutaContador = document.getElementById("rutaContador");
const badgePaso = document.getElementById("badgePaso");
const tituloModulo = document.getElementById("tituloModulo");
const terminalComando = document.getElementById("terminalComando");
const activosEl = document.getElementById("activos");
const botonesIdioma = document.querySelectorAll(".idioma__opcion");
const accionGlobal = document.getElementById("accionGlobal");
const marca = document.getElementById("marca");
const lector = document.getElementById("lector");
const lectorTitulo = document.getElementById("lectorTitulo");
const lectorFrame = document.getElementById("lectorFrame");
const lectorCerrar = document.getElementById("lectorCerrar");
const descripcion = document.getElementById("descripcion");
const estudianteBoton = document.getElementById("estudianteBoton");
const estudianteNombre = document.getElementById("estudianteNombre");
const bienvenida = document.getElementById("bienvenida");
const bienvenidaTitulo = document.getElementById("bienvenidaTitulo");
const bienvenidaForm = document.getElementById("bienvenidaForm");
const bienvenidaInput = document.getElementById("estudianteInput");
const bienvenidaGuardar = document.getElementById("bienvenidaGuardar");
const invitadoBoton = document.getElementById("invitadoBoton");
const resumen = document.getElementById("resumen");
const resumenCerrar = document.getElementById("resumenCerrar");
const resumenCortes = document.getElementById("resumenCortes");
const resumenPct = document.getElementById("resumenPct");
const resumenBarra = document.getElementById("resumenBarra");
const resumenDetalle = document.getElementById("resumenDetalle");
const reiniciarProgreso = document.getElementById("reiniciarProgreso");

let idioma = leerAlmacen(CLAVE_IDIOMA, "es");
if (!traducciones[idioma]) idioma = "es";

let unidadActiva = Number(leerAlmacen(CLAVE_UNIDAD, 0));
if (!Number.isInteger(unidadActiva) || unidadActiva < 0 || unidadActiva >= cortes.length) {
  unidadActiva = 0;
}

let respuestas = leerRespuestas();
let activoActual = null;
let estudiante = leerEstudiante();
let visitados = leerVisitados();
let modoBienvenida = "inicio";
let reinicioPendiente = false;

function leerAlmacen(clave, porDefecto) {
  try {
    const valor = localStorage.getItem(clave);
    return valor === null ? porDefecto : valor;
  } catch (e) {
    return porDefecto;
  }
}

function guardarAlmacen(clave, valor) {
  try {
    localStorage.setItem(clave, String(valor));
  } catch (e) {}
}

function leerRespuestas() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_RESPUESTAS) || "{}");
    return datos && typeof datos === "object" ? datos : {};
  } catch (e) {
    return {};
  }
}

function guardarRespuestas() {
  try {
    localStorage.setItem(CLAVE_RESPUESTAS, JSON.stringify(respuestas));
  } catch (e) {}
}

function leerEstudiante() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_ESTUDIANTE) || "null");
    if (datos && typeof datos.nombre === "string" && datos.nombre.trim()) {
      return { nombre: datos.nombre.trim(), invitado: Boolean(datos.invitado) };
    }
  } catch (e) {}
  return null;
}

function guardarEstudiante(nombre, invitado) {
  const limpio = String(nombre || "").trim();
  estudiante = { nombre: limpio || (invitado ? t("invitado") : ""), invitado };
  try {
    localStorage.setItem(CLAVE_ESTUDIANTE, JSON.stringify(estudiante));
  } catch (e) {}
  renderEstudiante();
}

function nombreEstudiante() {
  return estudiante ? (estudiante.invitado ? t("invitado") : estudiante.nombre) : "";
}

function renderEstudiante() {
  if (!estudiante) {
    estudianteBoton.hidden = true;
    return;
  }

  estudianteBoton.hidden = false;
  estudianteNombre.textContent = nombreEstudiante();
  estudianteBoton.setAttribute("aria-label", `${t("editarNombre")}: ${nombreEstudiante()}`);
}

function leerVisitados() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_VISITADOS) || "[]");
    return Array.isArray(datos) ? datos.filter((clave) => typeof clave === "string") : [];
  } catch (e) {
    return [];
  }
}

function guardarVisitados() {
  try {
    localStorage.setItem(CLAVE_VISITADOS, JSON.stringify(visitados));
  } catch (e) {}
}

function claveRecurso(corte, activo) {
  return `${corte.id}:${corte.activos.indexOf(activo)}:${activo.ruta}`;
}

function registrarVisita(corte, activo) {
  const clave = claveRecurso(corte, activo);
  if (visitados.includes(clave)) return;

  visitados.push(clave);
  guardarVisitados();
  renderActivos();
  if (!resumen.hidden) renderResumen();
}

function actualizarTextosBienvenida() {
  bienvenidaTitulo.textContent = modoBienvenida === "editar" ? t("bienvenidaTituloEditar") : t("bienvenidaTitulo");
  bienvenidaGuardar.textContent = modoBienvenida === "editar" ? t("guardarNombre") : t("iniciarSesion");
  invitadoBoton.hidden = modoBienvenida === "editar";
  bienvenidaInput.placeholder = t("nombrePlaceholder");
}

function abrirBienvenida(modo = "inicio") {
  modoBienvenida = modo;
  bienvenidaInput.value = estudiante && !estudiante.invitado ? estudiante.nombre : "";
  actualizarTextosBienvenida();
  bienvenida.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => bienvenidaInput.focus(), 0);
}

function cerrarBienvenida() {
  bienvenida.hidden = true;
  document.body.style.overflow = "";
}

function calcularResumen() {
  const total = cortes.reduce((suma, corte) => suma + corte.preguntas.length, 0);
  let aciertos = 0;
  let respondidasTotales = 0;

  cortes.forEach((corte) => {
    const almacen = respuestasDe(corte);
    respondidasTotales += Object.keys(almacen).length;
    corte.preguntas.forEach((pregunta) => {
      const valor = almacen[pregunta.id];
      if (valor !== undefined && Number(valor) === pregunta.correcta) aciertos++;
    });
  });

  return {
    total,
    aciertos,
    respondidas: respondidasTotales,
    visitados: new Set(visitados).size,
    porcentaje: total ? Math.round((aciertos / total) * 100) : 0
  };
}

function renderResumen() {
  const datos = calcularResumen();
  resumenPct.textContent = `${datos.porcentaje}%`;
  resumenBarra.style.width = `${datos.porcentaje}%`;
  resumenDetalle.textContent = t("resumenDetalle")
    .replace("{n}", datos.aciertos)
    .replace("{total}", datos.total)
    .replace("{v}", datos.visitados);

  resumenCortes.innerHTML = "";

  cortes.forEach((corte) => {
    const almacen = respuestasDe(corte);
    const total = corte.preguntas.length;
    const respondidas = Object.keys(almacen).length;
    const aciertos = corte.preguntas.filter(
      (pregunta) => almacen[pregunta.id] !== undefined && Number(almacen[pregunta.id]) === pregunta.correcta
    ).length;
    const porcentaje = total ? Math.round((aciertos / total) * 100) : 0;
    const recursosAbiertos = corte.activos.filter((activo) => visitados.includes(claveRecurso(corte, activo))).length;

    const articulo = document.createElement("article");
    articulo.className = "resumen__corte";
    articulo.innerHTML = `
      <div class="resumen__corte-cabecera">
        <span class="etiqueta-mono dim">${t("unitWord")} ${corte.icono}</span>
        <strong>${corte.titulo[idioma]}</strong>
      </div>
      <div class="resumen__metricas">
        <span>${t("puntaje")} <b>${aciertos}/${total}</b></span>
        <span>${t("porcentaje")} <b>${porcentaje}%</b></span>
        <span>${t("respondidasLabel")} <b>${respondidas}/${total}</b></span>
        <span>${t("visitadosLabel")} <b>${recursosAbiertos}/${corte.activos.length}</b></span>
      </div>
      <div class="barra"><span style="width:${porcentaje}%"></span></div>`;
    resumenCortes.append(articulo);
  });
}

function abrirResumen() {
  renderResumen();
  resumen.hidden = false;
  document.body.style.overflow = "hidden";
  resumenCerrar.focus();
}

function cerrarResumen() {
  resumen.hidden = true;
  document.body.style.overflow = "";
}

function reiniciarProgresoTotal() {
  respuestas = {};
  guardarRespuestas();
  visitados = [];
  guardarVisitados();
  reinicioPendiente = false;
  reiniciarProgreso.textContent = t("reiniciarProgreso");

  renderPreguntas();
  actualizarProgreso();
  renderActivos();
  renderResumen();
}

function obtenerDocumentoFrame() {
  try {
    return lectorFrame.contentDocument || (lectorFrame.contentWindow && lectorFrame.contentWindow.document);
  } catch (e) {
    return null;
  }
}

function prepararFrame() {
  if (!estudiante) return;

  const win = lectorFrame.contentWindow;
  const doc = obtenerDocumentoFrame();
  const nombre = nombreEstudiante();

  if (win) {
    try {
      ["ovaEstudiante", "nombreEstudiante", "studentName", "usuario", "user", "name"].forEach((clave) => {
        win.localStorage.setItem(clave, nombre);
      });
      win.localStorage.setItem("ovaSesion", JSON.stringify({ nombre, invitado: estudiante.invitado }));
      win.sessionStorage.setItem("unisimon_ova_active_session_v3", JSON.stringify({ name: nombre, panel: "home", current: 0 }));
    } catch (e) {}
  }

  if (!doc || !win) return;

  const campos = [
    doc.getElementById("studentName"),
    doc.getElementById("name"),
    doc.getElementById("nombre"),
    doc.querySelector('input[autocomplete="name"]'),
    ...doc.querySelectorAll('input[placeholder*="nombre" i], input[placeholder*="name" i], input[placeholder*="usuario" i]')
  ].filter(Boolean);

  campos.forEach((campo) => {
    if (!campo.value) {
      campo.value = nombre;
      campo.dispatchEvent(new Event("input", { bubbles: true }));
      campo.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });

  let form = doc.getElementById("loginForm");
  if (!form) {
    const conFormulario = campos.find((campo) => campo.closest("form"));
    form = conFormulario ? conFormulario.closest("form") : null;
  }

  if (form) {
    try {
      if (typeof form.requestSubmit === "function") form.requestSubmit();
      else form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    } catch (e) {}
  }

  const usuario = doc.getElementById("u");
  if (usuario) {
    if (!usuario.value) {
      usuario.value = nombre.toUpperCase();
      usuario.dispatchEvent(new Event("input", { bubbles: true }));
    }

    try {
      if (typeof win.login === "function") win.login();
    } catch (e) {}

    const error = doc.getElementById("err");
    if (error) error.textContent = "";

    if (doc.getElementById("home") && doc.getElementById("home").hidden) {
      try {
        if (typeof win.home === "function") win.home();
        if (typeof win.show === "function") win.show("home");
      } catch (e) {}
    }
  }
}

function urlConSeccion(activo) {
  if (!activo.seccion) return activo.ruta;

  const valor = activo.seccion.indice !== undefined
    ? `tema-${activo.seccion.indice}`
    : activo.seccion.pagina || activo.seccion.hash;

  return `${activo.ruta}?seccion=${encodeURIComponent(valor)}`;
}

function aplicarSeccionAlFrame() {
  avisarTemaAlFrame();

  const seccion = activoActual && activoActual.seccion;
  if (!seccion) return;

  const win = lectorFrame.contentWindow;
  const doc = obtenerDocumentoFrame();
  const valor = seccion.indice !== undefined
    ? `tema-${seccion.indice}`
    : seccion.pagina || seccion.hash;

  try {
    if (win) {
      win.postMessage(
        { tipo: "ovaSeccion", seccion: valor, indice: seccion.indice, pagina: seccion.pagina, hash: seccion.hash },
        "*"
      );
    }
  } catch (e) {}

  if (!doc || !win) return;

  try {
    if (seccion.tipo === "corte1") {
      if (typeof win.openTopic === "function") win.openTopic(seccion.indice);
      else {
        const boton = doc.querySelector(`[data-topic="${seccion.indice}"]`);
        if (boton) boton.click();
      }

      if (seccion.hash) {
        try {
          win.location.hash = seccion.hash;
        } catch (e) {}
      }
    } else if (seccion.tipo === "corte2") {
      if (typeof win.showPage === "function") win.showPage(seccion.pagina, false);
      else {
        const boton = doc.querySelector(`.nav button[data-page="${seccion.pagina}"]`);
        if (boton) boton.click();
      }

      if (seccion.laboratorio) {
        const laboratorio = doc.querySelector(`[data-lab="${seccion.laboratorio}"]`);
        if (laboratorio) laboratorio.click();
      }
    } else if (seccion.hash) {
      const destino = doc.getElementById(seccion.hash) || doc.querySelector(`[data-goto="${seccion.hash}"]`);
      if (destino && typeof destino.scrollIntoView === "function") {
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  } catch (e) {}
}

function t(clave) {
  return traducciones[idioma][clave] ?? clave;
}

function dosDigitos(numero) {
  return String(numero).padStart(2, "0");
}

function respuestasDe(corte) {
  const clave = corte.claveRespuestas || corte.id;
  if (!respuestas[clave] || typeof respuestas[clave] !== "object") {
    respuestas[clave] = {};
  }
  return respuestas[clave];
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
  const corte = cortes[unidadActiva];
  const almacen = respuestasDe(corte);
  preguntasEl.innerHTML = "";

  corte.preguntas.forEach((pregunta) => {
    const data = pregunta[idioma];
    const article = document.createElement("article");
    article.className = "pregunta";

    const pestana = document.createElement("span");
    pestana.className = "pregunta__pestana";
    pestana.textContent = `${corte.titulo[idioma]} · Q${dosDigitos(pregunta.id)}`;

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
      input.name = `pregunta-${corte.claveRespuestas || corte.id}-${pregunta.id}`;
      input.value = String(indice);
      input.checked = almacen[pregunta.id] === String(indice);

      const marcaOpcion = document.createElement("span");
      marcaOpcion.className = "opcion__marca";

      const textoOpcion = document.createElement("span");
      textoOpcion.className = "opcion__texto";
      textoOpcion.textContent = texto;

      label.append(input, marcaOpcion, textoOpcion);
      opciones.append(label);

      input.addEventListener("change", () => {
        almacen[pregunta.id] = input.value;
        guardarRespuestas();
        estadoPregunta(article, pregunta, input.value);
        actualizarProgreso();
      });
    });

    article.append(pestana, titulo, opciones);
    preguntasEl.append(article);

    if (almacen[pregunta.id] !== undefined) {
      estadoPregunta(article, pregunta, almacen[pregunta.id]);
    }
  });
}

function actualizarProgreso() {
  const corte = cortes[unidadActiva];

  const totalModulo = corte.preguntas.length;
  const respondidasModulo = Object.keys(respuestasDe(corte)).length;
  const porcentajeModulo = totalModulo ? Math.round((respondidasModulo / totalModulo) * 100) : 0;

  contadorRespondidas.textContent = t("respondidas")
    .replace("{n}", respondidasModulo)
    .replace("{total}", totalModulo);

  barraModulo.style.width = porcentajeModulo + "%";

  const totalGlobal = cortes.reduce((suma, c) => suma + c.preguntas.length, 0);
  const respondidasGlobal = cortes.reduce(
    (suma, c) => suma + Object.keys(respuestasDe(c)).length,
    0
  );
  const porcentajeGlobal = totalGlobal ? Math.round((respondidasGlobal / totalGlobal) * 100) : 0;

  barraGlobal.style.width = porcentajeGlobal + "%";
  pctGlobal.textContent = porcentajeGlobal + "%";

  const completado = respondidasGlobal === totalGlobal;
  badgeGlobal.textContent = completado ? t("completed") : t("inProgress");
  badgeGlobal.classList.toggle("completado", completado);
}

function renderUnidad() {
  const corte = cortes[unidadActiva];

  badgePaso.textContent = `${t("stepWordUpper")} ${dosDigitos(corte.orden)} • ${corte.subtitulo[idioma]}`;
  tituloModulo.textContent = corte.titulo[idioma];
  descripcion.innerHTML = corte.descripcion[idioma];
  rutaContador.textContent = `${dosDigitos(corte.orden)} / ${dosDigitos(cortes.length)}`;
  terminalComando.textContent = corte.comando;
  document.title = `OVA · CORE — ${t("unitWord")} ${corte.icono}: ${corte.titulo[idioma]}`;
  renderActivos();
}

function renderActivos() {
  const corte = cortes[unidadActiva];
  activosEl.innerHTML = "";

  const cabecera = document.createElement("div");
  cabecera.className = "activos__cabecera";

  const etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta-mono dim";
  etiqueta.textContent = t("recursosTitulo");

  const contador = document.createElement("span");
  contador.className = "activos__contador";
  contador.textContent = `${dosDigitos(corte.activos.length)} ${t("recursosLabel")}`;

  cabecera.append(etiqueta, contador);
  activosEl.append(cabecera);

  const cuadricula = document.createElement("div");
  cuadricula.className = "activos__cuadricula";

  corte.activos.forEach((activo, indice) => {
    const visitado = visitados.includes(claveRecurso(corte, activo));
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "activo" + (visitado ? " activo--visitado" : "");
    boton.setAttribute(
      "aria-label",
      `${t("abrirActivoAria")}: ${activo.titulo[idioma]}${visitado ? ` (${t("visitado")})` : ""}`
    );

    const icono = document.createElement("span");
    icono.className = "activo__icono";
    icono.textContent = visitado ? "✓" : dosDigitos(indice + 1);
    icono.setAttribute("aria-hidden", "true");

    const texto = document.createElement("span");
    texto.className = "activo__texto";

    const titulo = document.createElement("strong");
    titulo.textContent = activo.titulo[idioma];

    const detalle = document.createElement("small");
    detalle.textContent = activo.etiqueta?.[idioma] || `${t("recursoWord")} ${dosDigitos(indice + 1)}`;

    texto.append(titulo, detalle);

    const flecha = document.createElement("span");
    flecha.className = "activo__flecha";
    flecha.textContent = "↗";
    flecha.setAttribute("aria-hidden", "true");

    boton.append(icono, texto, flecha);
    boton.addEventListener("click", () => abrirLector(activo));
    cuadricula.append(boton);
  });

  activosEl.append(cuadricula);
}

function renderRuta() {
  rutaLista.innerHTML = "";

  cortes.forEach((corte, indice) => {
    const activo = indice === unidadActiva;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "modulo " + (activo ? "modulo--activo" : "modulo--disponible");
    boton.setAttribute(
      "aria-label",
      `${t("unitWord")} ${corte.icono}: ${corte.titulo[idioma]}`
    );
    boton.title = `${t("unitWord")} ${corte.icono} — ${corte.titulo[idioma]}`;
    if (activo) boton.setAttribute("aria-current", "step");

    const icono = document.createElement("span");
    icono.className = "modulo__icono";
    icono.innerHTML = iconosUnidad[indice % iconosUnidad.length];

    const texto = document.createElement("span");
    texto.className = "modulo__texto";

    const titulo = document.createElement("strong");
    titulo.textContent = corte.titulo[idioma];

    const detalle = document.createElement("small");
    detalle.textContent = `${t("unitWord")} ${corte.icono}`;

    texto.append(titulo, detalle);

    const marcaLateral = document.createElement("span");
    if (activo) {
      marcaLateral.className = "modulo__paso";
      marcaLateral.textContent = `${t("stepWord")} ${dosDigitos(corte.orden)}`;
    } else {
      marcaLateral.className = "modulo__flecha";
      marcaLateral.textContent = "↗";
      marcaLateral.setAttribute("aria-hidden", "true");
    }

    boton.append(icono, texto, marcaLateral);
    boton.addEventListener("click", () => seleccionarUnidad(indice));
    rutaLista.append(boton);
  });
}

function seleccionarUnidad(indice) {
  if (indice === unidadActiva) {
    abrirLector(cortes[indice].activos[0]);
    return;
  }

  unidadActiva = indice;
  guardarAlmacen(CLAVE_UNIDAD, unidadActiva);

  renderRuta();
  renderUnidad();
  renderPreguntas();
  actualizarProgreso();

  const primera = preguntasEl.querySelector(".pregunta");
  if (primera) {
    primera.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function aplicarIdioma(nuevoIdioma) {
  idioma = traducciones[nuevoIdioma] ? nuevoIdioma : "es";
  guardarAlmacen(CLAVE_IDIOMA, idioma);
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    if (traducciones[idioma][clave] !== undefined) {
      el.textContent = traducciones[idioma][clave];
    }
  });

  botonesIdioma.forEach((boton) => {
    const activo = boton.getAttribute("data-lang") === idioma;
    boton.classList.toggle("activo", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  renderRuta();
  renderUnidad();
  renderPreguntas();
  actualizarProgreso();
  renderEstudiante();

  accionGlobal.setAttribute("aria-label", t("verResumen"));
  reiniciarProgreso.textContent = reinicioPendiente ? t("confirmarReinicio") : t("reiniciarProgreso");
  if (!bienvenida.hidden) actualizarTextosBienvenida();
  if (!resumen.hidden) renderResumen();

  if (activoActual) {
    lectorTitulo.textContent = `${t("unitWord")} ${cortes[unidadActiva].icono} · ${activoActual.titulo[idioma]}`;
  }

  if (!lector.hidden) avisarTemaAlFrame();
}

function avisarTemaAlFrame() {
  if (lectorFrame.contentWindow) {
    lectorFrame.contentWindow.postMessage({ tipo: "ovaTema", tema: "dark" }, "*");
    lectorFrame.contentWindow.postMessage({ tipo: "ovaIdioma", idioma }, "*");
    lectorFrame.contentWindow.postMessage(
      { tipo: "ovaEstudiante", nombre: nombreEstudiante(), invitado: Boolean(estudiante && estudiante.invitado) },
      "*"
    );
  }
}

function abrirLector(activo = cortes[unidadActiva].activos[0]) {
  if (!activo) return;

  activoActual = activo;
  registrarVisita(cortes[unidadActiva], activo);
  lectorTitulo.textContent = `${t("unitWord")} ${cortes[unidadActiva].icono} · ${activo.titulo[idioma]}`;
  lectorFrame.src = urlConSeccion(activo);
  lector.hidden = false;
  document.body.style.overflow = "hidden";
  lectorCerrar.focus();
}

function cerrarLector() {
  activoActual = null;
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

accionGlobal.addEventListener("click", abrirResumen);

estudianteBoton.addEventListener("click", () => abrirBienvenida("editar"));

bienvenidaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  guardarEstudiante(bienvenidaInput.value, false);
  cerrarBienvenida();
});

invitadoBoton.addEventListener("click", () => {
  guardarEstudiante("", true);
  cerrarBienvenida();
});

resumenCerrar.addEventListener("click", cerrarResumen);
resumen.addEventListener("click", (e) => {
  if (e.target === resumen) cerrarResumen();
});

reiniciarProgreso.addEventListener("click", () => {
  if (!reinicioPendiente) {
    reinicioPendiente = true;
    reiniciarProgreso.textContent = t("confirmarReinicio");
    return;
  }

  reiniciarProgresoTotal();
});

marca.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

lectorCerrar.addEventListener("click", cerrarLector);
lectorFrame.addEventListener("load", () => {
  prepararFrame();
  aplicarSeccionAlFrame();
});
lector.addEventListener("click", (e) => {
  if (e.target === lector) cerrarLector();
});

bienvenida.addEventListener("click", (e) => {
  if (e.target === bienvenida && estudiante) cerrarBienvenida();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (!resumen.hidden) {
    cerrarResumen();
    return;
  }

  if (!bienvenida.hidden) {
    if (estudiante) cerrarBienvenida();
    return;
  }

  if (!lector.hidden) cerrarLector();
});

try {
  localStorage.setItem("ovaTema", "dark");
} catch (e) {}

document.getElementById("anio").textContent = new Date().getFullYear();

aplicarIdioma(idioma);
if (!estudiante) abrirBienvenida("inicio");
