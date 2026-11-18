<script setup>
import AppHeader from '../components/header.vue'
import AppFooter from '../components/footer.vue'

const numero = (i) => String(i + 1).padStart(2, '0')

const temario = [
    { titulo: 'Arquitectura y hardware', descripcion: 'Conoce los componentes principales de una computadora y los estándares actuales.' },
    { titulo: 'Ecosistemas y marcas', descripcion: 'Descubre las marcas más populares y reconocidas, y las opciones que tienes.' },
    { titulo: 'Gamas y rendimiento', descripcion: 'Entiende qué puede hacer cada gama de equipos y en qué se diferencian.' },
    { titulo: 'Perfiles de uso', descripcion: 'Clasifica las laptops en cuatro perfiles de uso para saber cuál necesitas.' },
    { titulo: 'Equipamiento y características externas', descripcion: 'Aprende qué revisar al comprar según el estado del equipo: nuevo, usado o reacondicionado.' },
    { titulo: 'Repaso final', descripcion: 'Conclusion y resumen del curso junto a otros detalles que puedes considerar según tus necesidades.' },
]

const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <AppHeader />

    <main class="min-h-dvh bg-fondo text-texto">
        <!-- HERO -->
        <section id="inicio" class="relative isolate flex min-h-dvh items-center overflow-hidden px-4 pb-16 pt-28 xxs:px-5 xs:px-6 sm:px-8 md:px-12 md:pb-24 md:pt-32 lg:px-16 xl:px-20">
            <video
                id="video-fondo"
                class="absolute inset-0 -z-10 h-full w-full object-cover mask-[linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                poster="../assets/Videos/posterbg.jpg"
            >
                <source src="../assets/Videos/background.webm" type="video/webm" />
                <source src="../assets/Videos/background.mp4" type="video/mp4" />
            </video>

            <div class="mx-auto w-full max-w-7xl">
                <p class="font-mono text-xs uppercase tracking-[0.2em] text-lcc md:text-sm md:tracking-[0.25em]">✦ Hecho para LCC</p>

                <h1 class="mt-6 text-3xl font-bold leading-[1.05] tracking-tight text-texto xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                    Curso Orientativo para
                    <span class="text-lcc">Estudiantes</span>
                </h1>

                <p class="mt-6 max-w-xl text-base leading-relaxed text-opaco xs:text-lg md:text-xl">
                    Un lugar donde conocerás las necesidades de tu próximo equipo de cómputo portátil para la carrera de LCC según tu presupuesto y objetivos.
                </p>

                <div class="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center xs:gap-4">
                    <router-link
                        to="/Curso"
                        class="group cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full bg-lcc px-6 py-3 font-mono text-sm uppercase tracking-wider text-gray-900 no-underline shadow-lg shadow-lcc/40 transition hover:brightness-110 xs:w-auto"
                    >
                        Comenzar
                        <span class="transition-transform group-hover:translate-x-1">→</span>
                    </router-link>
                    <a
                        href="#temario"
                        @click.prevent="scrollTo('temario')"
                        class="group cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full border border-lcc/50 px-6 py-3 font-mono text-sm uppercase tracking-wider text-texto no-underline transition hover:border-lcc hover:bg-lcc/10 xs:w-auto"
                    >
                        Más información
                        <span class="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- TEMARIO -->
        <section id="temario" class="scroll-mt-20 px-4 py-16 xxs:px-5 xs:px-6 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20">
            <div class="mx-auto max-w-7xl">
                <h2 class="text-3xl font-bold xs:text-4xl md:text-5xl">
                    Temario del <span class="text-lcc">curso</span>
                </h2>
                <p class="mt-3 max-w-2xl text-opaco">
                    Revisa los temas del curso, con una descripción de cada uno y el orden en que se abordan.
                </p>

                <ol class="mt-10 divide-y divide-borde border-y border-borde">
                    <li
                        v-for="(tema, i) in temario"
                        :key="tema.titulo"
                        class="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 py-6 sm:grid-cols-[3.5rem_1fr] md:grid-cols-[4rem_1fr_1.5fr] md:items-baseline md:gap-x-6"
                    >
                        <span class="row-span-2 text-2xl font-bold tabular-nums text-lcc md:row-span-1">{{ numero(i) }}</span>
                        <h3 class="text-lg font-semibold xs:text-xl">{{ tema.titulo }}</h3>
                        <p class="col-start-2 text-opaco md:col-start-auto">{{ tema.descripcion }}</p>
                    </li>
                </ol>
            </div>
        </section>

        <!-- COLABORADORES -->
        <section id="colaboradores" class="border-b border-borde px-4 py-16 xxs:px-5 xs:px-6 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20">
            <div class="mx-auto max-w-7xl">
                <h2 class="text-3xl font-bold xs:text-4xl md:text-5xl">
                    Colaboradores del <span class="text-lcc">proyecto</span>
                </h2>
                <p class="mt-3 text-opaco">Conoce a los creadores de este curso orientativo.</p>

                <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <article class="rounded-lg border border-borde bg-tarjeta p-6 transition-colors duration-300 ease-in-out hover:border-lcc">
                        <img src="https://i.imgur.com/CppaWt9.png" alt="Foto de Ángel Barragán" class="size-16 rounded-full object-cover" />
                        <h3 class="mt-4 font-semibold">Ángel Adrián Barragán Ruiz</h3>
                        <p class="text-sm text-opaco">Desarrollador y Diseñador Principal</p>
                    </article>

                    <article class="rounded-lg border border-borde bg-tarjeta p-6 transition-colors duration-300 ease-in-out hover:border-lcc">
                        <img src="https://i.imgur.com/Qgm3ey9.png" alt="Foto de Khristo Rodríguez" class="size-16 rounded-full object-cover" />
                        <h3 class="mt-4 font-semibold">Khristo Ricardo Rodríguez Valencia</h3>
                        <p class="text-sm text-opaco">Estratega de Contenido Instruccional</p>
                    </article>

                    <article class="rounded-lg border border-borde bg-tarjeta p-6 transition-colors duration-300 ease-in-out hover:border-lcc">
                        <img src="https://i.imgur.com/Eb5mzom.png" alt="Foto de Sergio Silva" class="size-16 rounded-full object-cover" />
                        <h3 class="mt-4 font-semibold">Sergio Gabriel Silva Contreras</h3>
                        <p class="text-sm text-opaco">Analista Técnico de Hardware</p>
                    </article>

                    <article class="rounded-lg border border-borde bg-tarjeta p-6 transition-colors duration-300 ease-in-out hover:border-lcc">
                        <img src="../assets/images/LogoAzul.png" alt="Foto del maestro Adolfo Castillo" class="size-16 rounded-full object-cover" />
                        <h3 class="mt-4 font-semibold">M.G.T.I. Adolfo Castillo Navarro</h3>
                        <p class="text-sm text-opaco">Supervisor y Evaluador</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- INFORMACIÓN -->
        <section id="info" class="scroll-mt-20 border-b border-borde px-4 py-16 xxs:px-5 xs:px-6 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20">
            <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12 lg:gap-20">
                <div class="md:top-24 md:self-start">
                    <h2 class="text-3xl font-bold xs:text-4xl">
                        Información del <span class="text-lcc">proyecto</span>
                    </h2>
                    <p class="mt-3 text-opaco">Conoce mas sobre la creacion de este curso.</p>
                </div>

                <div class="space-y-6 text-base leading-7 md:text-lg md:leading-8">
                    <p>
                        Este proyecto forma parte de la materia de <span class="text-lcc">Competencia Digital</span>, donde nos propusimos crear un proyecto que beneficiara de alguna manera a nuestra comunidad de <span class="text-lcc">LCC</span>. Para ello investigamos sobre el hardware actual e hicimos un curso web con toda la información recopilada.
                    </p>

                    <div>
                        <p class="text-sm text-opaco">Herramientas utilizadas</p>
                        <div class="mt-3 flex justify-center rounded-lg bg-zinc-900 p-5">
                            <img
                                src="https://skillicons.dev/icons?i=html,css,js,tailwind,vue,vite,nodejs,npm,python,vercel,supabase,git,github&theme=dark"
                                alt="Iconos de herramientas utilizadas"
                                class="h-auto max-w-full"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <p>¡Gracias por tomarte el tiempo de ver nuestro proyecto!</p>

                    <p>
                        Nos ayudarías mucho dándole 🌟 en
                        <a
                            href="https://github.com/Dakotska/CursoWebNTIC"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-lcc underline underline-offset-4 transition-colors hover:text-texto"
                        >GitHub</a>.
                    </p>
                </div>
            </div>
        </section>

        <!-- COMENZAR -->
        <section id="comenzar" class="relative isolate scroll-mt-20 overflow-hidden px-4 py-20 text-center xxs:px-5 xs:px-6 sm:px-8 md:px-12 md:py-32 lg:px-16 xl:px-20">
            <img
                src="../assets/images/FondoLuzEspacio.jpg"
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
                loading="lazy"
            />

            <div class="mx-auto max-w-2xl">
                <h2 class="text-3xl font-bold xs:text-4xl md:text-5xl">
                    ¡Comienza el <span class="text-lcc">curso ahora</span>!
                </h2>
                <p class="mt-4 text-base text-opaco xs:text-lg">
                    Empieza por el primer tema y avanza a tu propio ritmo.
                </p>

                <div class="mt-8 flex justify-center">
                    <router-link
                        to="/Curso"
                        class="inline-flex cursor-pointer items-center rounded-full border border-lcc/50 px-6 py-3 font-semibold text-texto no-underline transition hover:border-lcc hover:bg-lcc/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lcc"
                    >
                        Comenzar
                    </router-link>
                </div>
            </div>
        </section>
    </main>

    <AppFooter />
</template>