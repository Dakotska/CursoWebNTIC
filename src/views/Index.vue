<script setup>
</script>

<template>
    <main class="min-h-dvh min-w-dhv bg-fondo text-texto">
        <section id="inicio" class="pt-8 border-b border-borde">
            <a href="https://github.com/Dakotska/CursoWebNTIC" class="text-opaco">
                <span class="font-bold text-lcc">BY</span> LCC
            </a>
            <h1 class="mt-2 text-4xl md:text-6xl font-bold">
                Curso Orientativo para <span class="text-lcc">Estudiantes</span>
            </h1>
            <p class="mt-4 text-lg text-opaco">
                Un lugar donde conocerás las necesidades de tu próximo equipo de cómputo para la carrera de LCC según tu presupuesto y la forma en la que estudias.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
                <a href="#comenzar" class="text-lcc underline">Comenzar</a>
                <a href="#temas" class="text-lcc underline">Información</a>
            </div>
            <img src="https://placehold.co/400x400" alt="" class="mt-8 mx-auto">
            <p class="mt-6 text-center text-opaco">De Desarrolladores Para Desarrolladores.</p>
        </section>

        <section id="temas" class="py-12 border-b border-borde">
            <h2 class="text-3xl font-bold">Mejores Temas</h2>
            <p class="mt-2 text-opaco">Encuentra los temas de mayor interés en nuestro curso</p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-lg border border-borde bg-tarjeta p-6"><h3 class="font-semibold">Hardware</h3></div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6"><h3 class="font-semibold">Marcas</h3></div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6"><h3 class="font-semibold">Modelos</h3></div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6"><h3 class="font-semibold">Gamas</h3></div>
            </div>
        </section>

        <section id="indice" class="py-12 border-b border-borde">
            <h2 class="text-3xl font-bold">Temario del curso</h2>
            <p class="mt-2 text-opaco">Encuentra todos los temas impartidos en el curso, junto a su información detallada y su orden</p>
            <div class="mt-8 grid gap-4 md:grid-cols-2">
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">1</span> Arquitectura y Hardware</h3>
                    <p class="mt-2 text-opaco">El objetivo de este apartado es que la persona pueda conocer lo más importante de lo que compone a una computadora, además de los estándares actuales.</p>
                </div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">2</span> Ecosistemas y Marcas</h3>
                    <p class="mt-2 text-opaco">El objetivo de este apartado es dar a conocer las marcas más populares y de “buena fama” para que conozcan las opciones que tienen.</p>
                </div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">3</span> Gamas y Rendimiento</h3>
                    <p class="mt-2 text-opaco">El objetivo de este apartado es que sepan la capacidad de cada gama y cómo se separan.</p>
                </div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">4</span> Perfiles de Uso</h3>
                    <p class="mt-2 text-opaco">El objetivo del apartado es separar las laptops en cuatro tipos de uso para que sepan categorizarse.</p>
                </div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">5</span> Equipamiento y Características Externas</h3>
                    <p class="mt-2 text-opaco">El objetivo del apartado es que sepan qué tomar en cuenta al ver equipo en cada estado, al momento de la compra.</p>
                </div>
                <div class="rounded-lg border border-borde bg-tarjeta p-6">
                    <h3 class="font-semibold"><span class="text-lcc">6</span> Evaluación Final</h3>
                    <p class="mt-2 text-opaco">El objetivo de este apartado es que conozcan otros detalles que pueden tomar en cuenta según sus necesidades.</p>
                </div>
            </div>
        </section>

        <section id="colaboradores" class="py-12 border-b border-borde">
            <h2 class="text-3xl font-bold">Colaboradores del proyecto</h2>
            <p class="mt-2 text-opaco">Conoce a los creadores de este curso orientativo.</p>
            <div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <article class="rounded-lg border border-borde bg-tarjeta p-6">
                    <img src="https://placehold.co/64x64" alt="Foto de Ángel Barragán" class="rounded-full">
                    <h3 class="mt-4 font-semibold">Ángel Adrián Barragán Ruiz</h3>
                    <p class="text-sm text-opaco">Desarrollador y Diseñador Principal</p>
                </article>
                <article class="rounded-lg border border-borde bg-tarjeta p-6">
                    <img src="https://placehold.co/64x64" alt="Foto de Khristo Rodríguez" class="rounded-full">
                    <h3 class="mt-4 font-semibold">Khristo Ricardo Rodríguez Valencia</h3>
                    <p class="text-sm text-opaco">Estratega de Contenido y Diseñador Instruccional</p>
                </article>
                <article class="rounded-lg border border-borde bg-tarjeta p-6">
                    <img src="https://placehold.co/64x64" alt="Foto de Sergio Silva" class="rounded-full">
                    <h3 class="mt-4 font-semibold">Sergio Gabriel Silva Contreras</h3>
                    <p class="text-sm text-opaco">Analista Técnico de Hardware</p>
                </article>
                <article class="rounded-lg border border-borde bg-tarjeta p-6">
                    <img src="https://placehold.co/64x64" alt="Foto del maestro Adolfo Castillo" class="rounded-full">
                    <h3 class="mt-4 font-semibold">M.G.T.I. Adolfo Castillo Navarro</h3>
                    <p class="text-sm text-opaco">Supervisor y Evaluador</p>
                </article>
            </div>
        </section>

        <section id="info" class="py-12 border-b border-borde">
            <h2 class="text-3xl font-bold">Información del proyecto</h2>
            <p class="mt-2 text-opaco">Conoce información detallada sobre este proyecto.</p>
            <p class="mt-6">Este proyecto forma parte de la materia de Competencia Digital, donde nos propusimos crear un proyecto que beneficiara de alguna manera a nuestra comunidad de LCC. Para ello investigamos sobre el hardware actual y hicimos un curso web con toda la información recopilada.</p>
            <img src="https://skillicons.dev/icons?i=html,css,js,tailwind,vue,vite,nodejs,npm,python,vercel,supabase,git,github&theme=dark" alt="Iconos de herramientas utilizadas" class="mt-6">
            <p class="mt-6">¡Gracias por tomarte el tiempo de ver nuestro proyecto!</p>
            <p class="mt-2">Nos ayudaría mucho dándole 🌟 en <a href="https://github.com/Dakotska/CursoWebNTIC" class="text-lcc underline">GitHub</a>.</p>
        </section>

        <section id="comenzar" class="py-12 text-center">
            <img src="https://placehold.co/128x128" alt="" class="mx-auto">
            <h2 class="mt-6 text-3xl font-bold">¡Comienza el curso ahora!</h2>
        </section>
    </main>
</template>