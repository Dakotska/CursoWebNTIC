<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '../components/header.vue'
import AppFooter from '../components/footer.vue'

const route = useRoute()
const router = useRouter()

const temas = [
    {
        id: 1,
        tituloCorto: 'Hardware',
        titulo: 'Arquitectura y hardware',
        resumen: 'Componentes internos esenciales de una laptop y los estándares actuales que conviene considerar al momento de la compra.',
        intro: 'El objetivo de este módulo es que usted conozca los componentes más importantes de una computadora y los estándares vigentes, para saber a cuáles debe prestar mayor atención al momento de comprar.',
        secciones: [
            {
                titulo: 'Procesador',
                subtitulo: 'El cerebro',
                descripcion: 'También conocido como CPU, es el cerebro del equipo. Se encarga de las tareas del sistema operativo y de las aplicaciones que se utilizan. Los aspectos básicos que conviene revisar son los siguientes:',
                puntos: [
                    { clave: 'Núcleos', detalle: 'Son unidades de procesamiento independientes que permiten realizar varias tareas al mismo tiempo. Puede compararse con un equipo de cocineros que trabajan en paralelo.' },
                    { clave: 'Velocidad de reloj', detalle: 'Se mide en GHz e indica cuántas instrucciones puede ejecutar el procesador por segundo.' },
                    { clave: 'Memoria caché', detalle: 'Es un almacenamiento interno de muy alta velocidad que reduce el tiempo de acceso a los datos que se utilizan con frecuencia.' },
                    { clave: 'Estándar actual', detalle: 'En Intel, procesadores Core de 12.ª generación en adelante o Core Ultra; en AMD, Ryzen serie 5000 en adelante. La tarjeta madre debe ser compatible con estos procesadores para que el equipo no se vuelva lento con rapidez.' }
                ]
            },
            {
                titulo: 'Memoria RAM',
                subtitulo: 'La memoria fugaz',
                descripcion: 'Es un componente de almacenamiento temporal y volátil. Su función es guardar los datos y las instrucciones que el procesador necesita de forma inmediata, evitando depender del almacenamiento permanente, que es más lento. Puede compararse con el escritorio de trabajo: mientras más amplio sea, más documentos tendrá al alcance de la mano. Sus características principales son:',
                puntos: [
                    { clave: 'Acceso aleatorio', detalle: 'Permite leer o escribir datos en cualquier posición de memoria de forma directa, sin necesidad de seguir un orden secuencial.' },
                    { clave: 'Velocidad', detalle: 'Opera a velocidades del orden de nanosegundos, lo que facilita la multitarea y el arranque rápido de las aplicaciones.' },
                    { clave: 'Capacidad', detalle: 'Se mide en gigabytes (GB) y determina cuántos programas pueden ejecutarse al mismo tiempo. En 2026, las capacidades habituales van de 8 GB a 32 GB o más.' }
                ]
            },
            {
                titulo: 'Almacenamiento',
                subtitulo: 'La memoria a largo plazo',
                descripcion: 'Son los componentes que conservan los datos de forma permanente, incluso cuando el equipo está apagado. Funcionan como el archivero del sistema, pues guardan el sistema operativo, las aplicaciones y los archivos del usuario. Los tipos principales son:',
                puntos: [
                    { clave: 'Disco duro (HDD)', detalle: 'Utiliza platos magnéticos giratorios y cabezales mecánicos. Es económico, aunque más lento debido a sus partes móviles.' },
                    { clave: 'Unidad de estado sólido (SSD)', detalle: 'Emplea memoria flash (NAND) sin partes móviles, lo que ofrece velocidades de acceso considerablemente mayores y mayor durabilidad. Es el estándar actual.' },
                    { clave: 'Unidad NVMe (M.2)', detalle: 'Es un SSD con una conexión de mayor velocidad y un formato compacto. Es la opción recomendable en los equipos actuales.' },
                    { clave: 'Memoria USB', detalle: 'Dispositivo portátil de estado sólido que permite transportar datos fácilmente a través del puerto USB. No está pensado como almacenamiento principal.' }
                ]
            },
            {
                titulo: 'Tarjeta gráfica (GPU) y pantalla',
                subtitulo: 'El pintor y la ventana',
                descripcion: 'Para programar no es indispensable contar con una tarjeta gráfica dedicada, pero sí es recomendable una pantalla nítida que reduzca la fatiga visual tras varias horas frente al código. La GPU es la encargada de procesar los datos visuales y mostrar imágenes, videos y animaciones.',
                puntos: [
                    { clave: 'GPU integrada', detalle: 'Forma parte del procesador y comparte la memoria RAM. Intel Iris Xe o Arc, o AMD Radeon, son suficientes para desarrollo web, desarrollo móvil, bases de datos y programación general.' },
                    { clave: 'GPU dedicada', detalle: 'Es un componente independiente con memoria propia, denominada VRAM. Las tarjetas NVIDIA GeForce RTX resultan útiles únicamente si se enfoca en el entrenamiento local de modelos de IA, el desarrollo de videojuegos o el renderizado 3D.' },
                    { clave: 'Pantalla', detalle: 'Se recomienda un panel IPS, que ofrece mejores ángulos de visión y fidelidad de color que los paneles TN, con resolución Full HD (1920×1080) o superior y acabado antirreflejo.' }
                ]
            }
        ],
        nota: 'Si su presupuesto es ajustado, priorice 16 GB de memoria RAM y un procesador moderno antes que una tarjeta gráfica dedicada.'
    },
    {
        id: 2,
        tituloCorto: 'Ecosistemas',
        titulo: 'Ecosistemas y marcas',
        resumen: 'Principales fabricantes, sus líneas y su enfoque, para elegir según las necesidades de cada usuario.',
        intro: 'Cada marca tiene un enfoque propio: algunas priorizan el precio, otras el diseño y otras el rendimiento para juegos. Conocer sus líneas permite identificar qué opciones se ajustan mejor a lo que usted necesita.',
        secciones: [
            {
                titulo: 'Marcas de uso general',
                subtitulo: 'Para todos los bolsillos',
                descripcion: 'Son marcas de amplia disponibilidad, con opciones para casi cualquier presupuesto y tipo de uso. Su principal ventaja es la variedad; su principal desventaja es que el costo y la calidad de los componentes varían considerablemente entre modelos.',
                puntos: [
                    { clave: 'HP', detalle: 'Líneas ProBook, Pavilion, OmniBook, Victus, Omen y ZBook. Fortalezas: economía, fácil obtención y utilidad general. Debilidades: precio de algunos modelos, componentes y vida útil.' },
                    { clave: 'Lenovo', detalle: 'Líneas ThinkPad, IdeaPad y Legion. Fortalezas: costo, rendimiento, materiales y componentes. Debilidades: costo elevado en los modelos de gama alta.' },
                    { clave: 'Dell', detalle: 'Líneas Latitude, Inspiron y Alienware. Fortalezas: costo bajo en algunos modelos y buen rendimiento. Debilidades: costo de algunos modelos y calidad variable de sus componentes.' }
                ]
            },
            {
                titulo: 'Marcas premium y de diseño',
                subtitulo: 'Diseño cuidado',
                descripcion: 'Estas marcas destacan por la calidad de construcción y por la integración entre sus dispositivos. Suelen tener precios más altos y ofrecen menos facilidad para reparar o actualizar el equipo. Los equipos Apple incluyen macOS; los demás, Windows 11 original.',
                puntos: [
                    { clave: 'Apple', detalle: 'Líneas MacBook Pro, Air y Neo. Fortalezas: durabilidad, portabilidad y eficiencia energética. Debilidades: costo, posibilidades limitadas de actualización y reparaciones costosas.' },
                    { clave: 'Samsung', detalle: 'Línea Galaxy Book. Fortalezas: componentes, rendimiento y ecosistema. Debilidades: precio y dificultad de reparación.' },
                    { clave: 'Microsoft', detalle: 'Línea Surface. Fortalezas: rendimiento y ecosistema. Debilidades: precio y disponibilidad limitada.' }
                ]
            },
            {
                titulo: 'Marcas orientadas a juegos',
                subtitulo: 'Potencia para jugar',
                descripcion: 'Priorizan el rendimiento gráfico y el procesamiento intensivo. Algunas de sus líneas cuentan con opciones económicas, aunque los modelos más potentes suelen costar y pesar más.',
                puntos: [
                    { clave: 'ASUS', detalle: 'Líneas ROG y TUF. Fortalezas: calidad, precio, portabilidad y durabilidad. Debilidades: sobreprecio en algunos modelos y una construcción menos robusta en la línea TUF.' },
                    { clave: 'Razer', detalle: 'Línea Blade. Fortalezas: portabilidad, buenos componentes y buen rendimiento general. Debilidades: costo elevado y dificultad para importarla.' },
                    { clave: 'Acer', detalle: 'Líneas Nitro, Predator y Victus. Fortalezas: economía y buen rendimiento en algunos modelos. Debilidades: componentes y rendimiento de sus modelos económicos.' }
                ]
            },
            {
                titulo: 'Gama empresarial frente a gama de consumo',
                subtitulo: 'Durabilidad estructural',
                descripcion: 'Dos equipos con especificaciones internas idénticas pueden tener vidas útiles muy distintas, según la calidad de su construcción.',
                puntos: [
                    { clave: 'Líneas empresariales', detalle: 'Lenovo ThinkPad (series T, L o P), Dell Latitude y Precision, y HP ProBook y EliteBook.' },
                    { clave: 'Beneficios', detalle: 'Teclados diseñados para escritura intensiva, bisagras reforzadas, mejor disipación térmica y acceso sencillo para ampliar la memoria o el almacenamiento.' }
                ]
            }
        ],
        nota: 'Un equipo empresarial de una o dos generaciones anteriores suele ofrecer mejor teclado, refrigeración y durabilidad que un equipo económico nuevo de gama de consumo.'
    },
    {
        id: 3,
        tituloCorto: 'Gamas',
        titulo: 'Gamas y rendimiento',
        resumen: 'Diferencias prácticas entre equipos de entrada, gama media y gama alta, según las exigencias de la licenciatura.',
        intro: 'Ubicar cada equipo dentro de su gama permite evaluar con claridad el nivel de rendimiento que se obtiene por la inversión, sin pagar por capacidades que no se necesitan.',
        secciones: [
            {
                titulo: 'Gama de entrada',
                subtitulo: 'La bicicleta: cubre lo básico',
                descripcion: 'Equipos de cómputo básico, orientados al estudio elemental: procesadores de texto, lectura y reproducción de videos. Son de bajo costo, pero tienen limitaciones en tareas exigentes.',
                puntos: [
                    { clave: 'Configuración base', detalle: 'Procesadores Intel Celeron, Pentium o Athlon en los modelos más económicos, y Core i3 o Ryzen 3 en los básicos. Memoria de 8 GB como mínimo (12 GB es lo más común). Almacenamiento HDD de cualquier capacidad o SSD de 256 a 512 GB. Gráficos integrados.' },
                    { clave: 'Alcance', detalle: 'Adecuada para algoritmos básicos, lenguaje C, Python, Git y edición de código ligera.' },
                    { clave: 'Limitación', detalle: 'Presenta lentitud al ejecutar emuladores, contenedores múltiples o entornos de trabajo pesados.' }
                ]
            },
            {
                titulo: 'Gama media',
                subtitulo: 'El auto familiar: equilibrio ideal',
                descripcion: 'Ofrece la mejor relación entre potencia de procesamiento, autonomía de batería, portabilidad y costo para la mayor parte de la carrera.',
                puntos: [
                    { clave: 'Configuración base', detalle: 'Procesadores Ryzen 5 o Ryzen 7, o Core i5 o i7 de generación reciente. Memoria de 12 GB como mínimo y 16 GB recomendados. Almacenamiento SSD NVMe de 256 a 512 GB, o SSD de 512 GB a 1 TB. Gráficos integrados o una tarjeta dedicada de entrada: GTX de 4 a 6 GB, o RTX y Radeon RX de 6 a 12 GB.' },
                    { clave: 'Alcance', detalle: 'Permite trabajar con soltura en desarrollo web full-stack, bases de datos, Docker, compilación media y virtualización.' }
                ]
            },
            {
                titulo: 'Gama alta, Workstation y Gamer',
                subtitulo: 'El taller profesional',
                descripcion: 'Orientada a cargas de trabajo exigentes, procesamiento gráfico y simulación avanzada. Se divide en gama media-alta y gama alta.',
                puntos: [
                    { clave: 'Configuración base', detalle: 'Gama media-alta: procesadores Ryzen 7, Core i7 de 13.ª generación o superior, o chips Apple M3 y M4; 16 GB de memoria RAM (32 GB recomendados); NVMe de 1 a 4 TB y tarjeta RTX o Radeon de 8 a 16 GB. Gama alta: procesadores Ryzen 9, Core i9 o Ultra 9; 32 GB de memoria RAM (de 64 a 128 GB para cargas extremas); NVMe de 2 TB o más, y tarjeta RTX o Radeon de 16 a 32 GB.' },
                    { clave: 'Contrapartida', detalle: 'En los modelos gamer, el peso suele superar los 2.2 kg, el cargador es voluminoso y la autonomía sin conexión eléctrica es reducida.' }
                ]
            }
        ],
        nota: 'Para la gran mayoría de estudiantes de la licenciatura, una laptop de gama media equilibrada resulta más cómoda y funcional en el día a día que un equipo gamer pesado.'
    },
    {
        id: 4,
        tituloCorto: 'Perfiles',
        titulo: 'Perfiles de uso',
        resumen: 'Cuatro perfiles de uso para identificar qué características priorizar según la rutina de cada persona.',
        intro: 'Más allá de las cifras de una ficha técnica, la elección adecuada depende de cómo y dónde se utiliza el equipo: entre aulas, laboratorios y casa.',
        secciones: [
            {
                titulo: 'Perfil 1 · Para estudios',
                subtitulo: 'Portabilidad y autonomía',
                descripcion: 'Orientado a la investigación, la redacción de trabajos, las clases en línea y la multitarea ligera. Se priorizan un equipo liviano, de batería prolongada y una buena relación calidad-precio.',
                puntos: [
                    { clave: 'Prioridad', detalle: 'Procesador de bajo consumo (Intel Core i3 o i5, o AMD Ryzen 3 o 5), 8 GB o 16 GB de memoria RAM y SSD de 256 o 512 GB.' },
                    { clave: 'Movilidad', detalle: 'Peso inferior a 1.5 kg, pantalla de 13 a 14 pulgadas y carga mediante USB-C.' },
                    { clave: 'Gráficos', detalle: 'Los gráficos integrados son suficientes para este perfil.' }
                ]
            },
            {
                titulo: 'Perfil 2 · Para gaming',
                subtitulo: 'Potencia gráfica',
                descripcion: 'Orientado a videojuegos actuales con alta tasa de cuadros por segundo, además de renderizado, edición de video y programación intensiva.',
                puntos: [
                    { clave: 'Prioridad', detalle: 'Tarjeta gráfica NVIDIA GeForce RTX o AMD Radeon, procesador Intel Core i7/i9 o AMD Ryzen 7/9, y 16 GB de memoria RAM como mínimo.' },
                    { clave: 'Soporte', detalle: 'Pantalla de 120 Hz o superior y un sistema de refrigeración avanzado que disipe el calor bajo cargas pesadas.' }
                ]
            },
            {
                titulo: 'Perfil 3 · Para trabajo',
                subtitulo: 'Multitarea',
                descripcion: 'Dirigido a profesionales independientes, creadores de contenido y perfiles técnicos que manejan varias aplicaciones simultáneamente, hojas de cálculo extensas o entornos de desarrollo.',
                puntos: [
                    { clave: 'Prioridad', detalle: 'Procesador equilibrado de gama media-alta y 16 GB de memoria RAM o más.' },
                    { clave: 'Soporte', detalle: 'Pantalla con buena precisión de color, teclado cómodo para escritura prolongada y conectividad variada (USB-A, USB-C y HDMI).' }
                ]
            },
            {
                titulo: 'Perfil 4 · Para empresas',
                subtitulo: 'Seguridad y durabilidad',
                descripcion: 'Dirigido a departamentos de TI y flotas corporativas que requieren seguridad avanzada, durabilidad a prueba de fallos y facilidad de gestión remota.',
                puntos: [
                    { clave: 'Prioridad', detalle: 'Chip TPM 2.0, lector de huellas o cámara con infrarrojos para autenticación biométrica, y garantía extendida con soporte técnico directo.' },
                    { clave: 'Soporte', detalle: 'Materiales de alta resistencia, a menudo con certificaciones de durabilidad militar, y componentes orientados a la estabilidad corporativa.' }
                ]
            }
        ],
        nota: 'Considere su trayecto diario: si transportará la laptop en la mochila todos los días, el peso y la duración de la batería tienen tanto impacto como el procesador.'
    },
    {
        id: 5,
        tituloCorto: 'Equipamiento',
        titulo: 'Equipamiento y características externas',
        resumen: 'Aspectos físicos y de inspección técnica que se deben verificar antes de comprar un equipo nuevo, usado o reacondicionado.',
        intro: 'La experiencia diaria depende en gran medida de la ergonomía del teclado, la disponibilidad de puertos y el estado físico de los componentes.',
        secciones: [
            {
                titulo: 'Teclado, puertos, cámara y conectividad',
                subtitulo: 'Comodidad en el aula',
                descripcion: 'Escribirá miles de líneas de código; un teclado cómodo y puertos completos agilizan el trabajo diario.',
                puntos: [
                    { clave: 'Teclado', detalle: 'Buen recorrido de tecla, retroiluminación para entornos con poca luz y distribución cómoda (español o inglés US).' },
                    { clave: 'Puertos', detalle: 'Al menos un puerto USB tradicional, uno o dos USB-C con salida de video y carga, y HDMI para proyectores.' },
                    { clave: 'Cámara', detalle: 'Full HD (1080p) como mínimo, con tapa física para proteger su privacidad. Las cámaras de 720p se ven borrosas en videollamadas.' },
                    { clave: 'Conectividad', detalle: 'Wi-Fi 6 o superior para una conexión estable, y Bluetooth 5.2 o superior para audífonos sin retrasos.' }
                ]
            },
            {
                titulo: 'Verificación en equipo nuevo',
                subtitulo: 'Como estrenar ropa',
                descripcion: 'Puntos clave que conviene confirmar antes de concretar la compra, ya sea en tienda o en línea.',
                puntos: [
                    { clave: 'Garantía', detalle: 'Confirme que tenga cobertura válida en México directamente con el fabricante y que la factura sea válida para hacerla efectiva. Verifique también que la caja venga sellada.' },
                    { clave: 'Expansión', detalle: 'Revise si abrir la cubierta inferior para ampliar la memoria o el almacenamiento afecta los términos de la garantía.' },
                    { clave: 'Resolución', detalle: 'Descarte las pantallas HD (1366×768), ya que limitan demasiado el espacio vertical disponible en el editor de código.' }
                ]
            },
            {
                titulo: 'Inspección en equipo usado o reacondicionado',
                subtitulo: 'Como comprar un auto usado',
                descripcion: 'Adquirir un equipo usado o reacondicionado es una buena opción si se validan los siguientes puntos antes de pagar. En el caso de un equipo reacondicionado, verifique además que lo certifique el fabricante o una tienda confiable, su grado estético (A, B o C) y una garantía mínima de 3 a 6 meses.',
                puntos: [
                    { clave: 'Batería', detalle: 'Verifique el desgaste real con "powercfg /batteryreport" en Windows o "upower -i" en Linux. Se recomienda una salud de al menos 80%.' },
                    { clave: 'Almacenamiento', detalle: 'Consulte las horas de encendido y el estado SMART del SSD con herramientas como CrystalDiskInfo o smartctl.' },
                    { clave: 'Hardware', detalle: 'Compruebe cada tecla, cada puerto USB y HDMI, la cámara, el micrófono y las bisagras. Revise la pantalla con fondos claros y oscuros, y verifique que los ventiladores no produzcan ruidos extraños.' },
                    { clave: 'Firmware', detalle: 'Ingrese al BIOS/UEFI para confirmar que no tenga contraseña de administrador ni bloqueos empresariales (Computrace o MDM).' }
                ]
            }
        ],
        nota: 'Nunca cierre la compra de una laptop usada sin ingresar previamente al BIOS y probar físicamente todos sus puertos y teclas.'
    },
    {
        id: 6,
        tituloCorto: 'Repaso',
        titulo: 'Repaso final',
        resumen: 'Síntesis de criterios y lista de verificación interactiva para evaluar la próxima laptop.',
        intro: 'Ha recorrido los fundamentos técnicos y prácticos para tomar una decisión informada. Utilice esta lista de verificación para validar el modelo que tenga en mente antes de adquirirlo.',
        secciones: [
            {
                titulo: 'Orden de prioridad al invertir',
                subtitulo: 'Por dónde empezar',
                descripcion: 'Al comparar opciones dentro de su presupuesto, evalúe los componentes en este orden:',
                puntos: [
                    { clave: '1. Procesador', detalle: 'CPU moderna de gama media (Ryzen 5 o 7, o Core i5 o i7 de generación reciente).' },
                    { clave: '2. Memoria RAM', detalle: '16 GB instalados, o 8 GB con una ranura disponible para ampliar a corto plazo.' },
                    { clave: '3. Almacenamiento', detalle: 'Unidad SSD NVMe de al menos 512 GB.' },
                    { clave: '4. Pantalla y chasis', detalle: 'Panel IPS Full HD antirreflejo y construcción sólida.' }
                ]
            },
            {
                titulo: 'Errores frecuentes al comprar',
                subtitulo: 'Lo que suele salir caro',
                descripcion: 'Evite guiarse únicamente por etiquetas comerciales sin revisar la generación del hardware:',
                puntos: [
                    { clave: 'Generaciones antiguas', detalle: 'Un procesador Core i7 de hace seis o siete años rinde considerablemente menos que un Core i5 o Ryzen 5 actual.' },
                    { clave: 'RAM soldada limitada', detalle: 'Equipos ultradelgados con 8 GB soldados que no permiten ampliación futura.' },
                    { clave: 'Gráficas de gama muy baja', detalle: 'Sacrificar pantalla y batería por una GPU dedicada antigua cuyo rendimiento apenas supera al de los gráficos integrados modernos.' }
                ]
            }
        ],
        nota: 'Compare al menos dos alternativas dentro del mismo rango de precio y consulte reseñas sobre temperaturas y duración real de la batería antes de decidir.'
    }
]

const indiceActual = ref(0)

const sincronizarDesdeRuta = () => {
    const num = Number(route.query.tema)
    if (num >= 1 && num <= temas.length) {
        indiceActual.value = num - 1
    } else {
        indiceActual.value = 0
    }
}

sincronizarDesdeRuta()

watch(() => route.query.tema, () => {
    sincronizarDesdeRuta()
})

const temaActivo = computed(() => temas[indiceActual.value])

const seleccionarTema = (index) => {
    indiceActual.value = index
    router.replace({ query: { ...route.query, tema: index + 1 } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <AppHeader />

    <main class="min-h-dvh bg-fondo text-texto">
        <!-- BARRA DE PROGRESO / SELECTOR DE TEMAS -->
        <nav
            aria-label="Progreso del curso"
            class="border-b border-borde bg-fondo/95 py-6 md:py-8"
        >
            <div class="mx-auto max-w-3xl px-4 sm:px-6">
                <ol class="flex items-start justify-between">
                    <li
                        v-for="(tema, i) in temas"
                        :key="tema.id"
                        class="relative flex flex-1 flex-col items-center"
                    >
                        <!-- Línea conectora derecha hacia el siguiente nodo -->
                        <span
                            v-if="i < temas.length - 1"
                            aria-hidden="true"
                            class="absolute left-1/2 top-4 h-[2px] w-full -translate-y-1/2 transition-colors duration-300 md:top-5"
                            :class="i < indiceActual ? 'bg-lcc' : 'bg-borde'"
                        ></span>

                        <!-- Nodo circular interactivo -->
                        <button
                            type="button"
                            @click="seleccionarTema(i)"
                            :aria-current="i === indiceActual ? 'step' : null"
                            :aria-label="`Módulo ${tema.id}: ${tema.titulo}`"
                            class="relative z-10 flex size-8 cursor-pointer items-center justify-center rounded-full text-xs font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lcc md:size-10 md:text-sm"
                            :class="[
                                i < indiceActual
                                    ? 'bg-lcc text-white hover:brightness-110'
                                    : i === indiceActual
                                        ? 'bg-lcc text-white ring-2 ring-lcc ring-offset-2 ring-offset-fondo'
                                        : 'border-2 border-borde bg-tarjeta text-opaco hover:border-opaco hover:text-texto'
                            ]"
                        >
                            <!-- Palomita para módulos completados -->
                            <svg
                                v-if="i < indiceActual"
                                class="size-4 md:size-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>

                            <!-- Número para el módulo actual y los no alcanzados -->
                            <span v-else>{{ tema.id }}</span>
                        </button>

                        <!-- Etiqueta e indicador inferior minimalista -->
                        <button
                            type="button"
                            @click="seleccionarTema(i)"
                            class="mt-3 hidden cursor-pointer flex-col items-center gap-1.5 text-center md:flex"
                        >
                            <span
                                class="text-xs transition-colors"
                                :class="i === indiceActual
                                    ? 'font-semibold text-texto'
                                    : i < indiceActual
                                        ? 'font-medium text-opaco hover:text-texto'
                                        : 'text-opaco/70 hover:text-opaco'"
                            >
                                {{ tema.tituloCorto }}
                            </span>

                            <!-- Doble línea decorativa estilo progreso -->
                            <span class="flex flex-col items-center gap-1" aria-hidden="true">
                                <span
                                    class="h-[3px] w-9 rounded-full transition-colors"
                                    :class="i === indiceActual
                                        ? 'bg-lcc'
                                        : i < indiceActual
                                            ? 'bg-lcc/40'
                                            : 'bg-borde'"
                                ></span>
                                <span
                                    class="h-[3px] w-5 rounded-full transition-colors"
                                    :class="i === indiceActual
                                        ? 'bg-lcc'
                                        : i < indiceActual
                                            ? 'bg-lcc/40'
                                            : 'bg-borde'"
                                ></span>
                            </span>
                        </button>
                    </li>
                </ol>

                <!-- Nombre del módulo activo visible en móvil -->
                <p class="mt-4 text-center text-xs font-medium text-opaco md:hidden">
                    Módulo {{ temaActivo.id }} de {{ temas.length }} ·
                    <span class="text-texto">{{ temaActivo.titulo }}</span>
                </p>
            </div>
        </nav>

        <!-- CONTENIDO EDITORIAL CENTRADO -->
        <article class="mx-auto max-w-3xl px-5 py-10 sm:px-8 md:py-16">
            <header class="border-b border-borde pb-8">
                <p class="text-xs font-semibold uppercase tracking-widest text-lcc">
                    Módulo {{ temaActivo.id }} de {{ temas.length }}
                </p>

                <h1 class="mt-3 text-3xl font-bold tracking-tight text-texto sm:text-4xl md:text-[2.65rem] md:leading-[1.15]">
                    {{ temaActivo.titulo }}
                </h1>

                <p class="mt-4 text-base leading-relaxed text-opaco sm:text-lg">
                    {{ temaActivo.resumen }}
                </p>
            </header>

            <!-- INTRODUCCIÓN -->
            <p class="mt-8 text-base leading-8 text-texto sm:text-[1.0625rem]">
                {{ temaActivo.intro }}
            </p>

            <!-- SECCIONES DEL MÓDULO -->
            <div class="mt-12 space-y-12">
                <section
                    v-for="seccion in temaActivo.secciones"
                    :key="seccion.titulo"
                    class="border-t border-borde pt-8"
                >
                    <div class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-opaco">
                            {{ seccion.subtitulo }}
                        </span>
                        <h2 class="text-xl font-semibold tracking-tight text-texto sm:text-2xl">
                            {{ seccion.titulo }}
                        </h2>
                    </div>

                    <p class="mt-3 text-base leading-7 text-opaco">
                        {{ seccion.descripcion }}
                    </p>

                    <dl class="mt-6 divide-y divide-borde border-y border-borde">
                        <div
                            v-for="punto in seccion.puntos"
                            :key="punto.clave"
                            class="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
                        >
                            <dt class="text-sm font-semibold text-texto">
                                {{ punto.clave }}
                            </dt>
                            <dd class="text-sm leading-6 text-opaco sm:text-[0.9375rem]">
                                {{ punto.detalle }}
                            </dd>
                        </div>
                    </dl>
                </section>
            </div>

            <!-- NOTA EDITORIAL -->
            <aside class="mt-12 border-l-2 border-lcc pl-5">
                <p class="text-xs font-semibold uppercase tracking-wider text-lcc">
                    Punto clave
                </p>
                <p class="mt-1.5 text-sm leading-7 text-texto sm:text-base">
                    {{ temaActivo.nota }}
                </p>
            </aside>

            <!-- NAVEGACIÓN INFERIOR ENTRE MÓDULOS -->
            <nav
                aria-label="Navegación entre módulos"
                class="mt-14 flex items-center justify-between gap-4 border-t border-borde pt-8"
            >
                <button
                    v-if="indiceActual > 0"
                    type="button"
                    @click="seleccionarTema(indiceActual - 1)"
                    class="group inline-flex cursor-pointer items-center gap-2 rounded-lg border border-borde bg-fondo px-4 py-2.5 text-sm font-medium text-texto transition hover:border-opaco"
                >
                    <span class="transition-transform group-hover:-translate-x-0.5">←</span>
                    <span>Anterior</span>
                </button>
                <span v-else></span>

                <button
                    v-if="indiceActual < temas.length - 1"
                    type="button"
                    @click="seleccionarTema(indiceActual + 1)"
                    class="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-lcc px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:brightness-110"
                >
                    <span>Siguiente módulo</span>
                    <span class="transition-transform group-hover:translate-x-0.5">→</span>
                </button>

                <router-link
                    v-else
                    to="/"
                    class="inline-flex items-center gap-2 rounded-lg bg-lcc px-5 py-2.5 text-sm font-semibold text-gray-950 no-underline transition hover:brightness-110"
                >
                    <span>Finalizar curso</span>
                    <span>✓</span>
                </router-link>
            </nav>
        </article>
    </main>

    <AppFooter />
</template>