<script setup>
const anio = new Date().getFullYear()

const columnas = [
    {
        titulo: 'Curso',
        enlaces: [
            { texto: 'Inicio', href: '#inicio' },
            { texto: 'Temario', href: '#indice' },
            { texto: 'Comenzar', href: '#comenzar' },
        ],
    },
    {
        titulo: 'Temas',
        enlaces: [
            { texto: 'Arquitectura y hardware', href: '#indice' },
            { texto: 'Ecosistemas y marcas', href: '#indice' },
            { texto: 'Gamas y rendimiento', href: '#indice' },
            { texto: 'Perfiles de uso', href: '#indice' },
            { texto: 'Equipamiento', href: '#indice' },
            { texto: 'Evaluación final', href: '#indice' },
        ],
    },
    {
        titulo: 'Proyecto',
        enlaces: [
            { texto: 'Colaboradores', href: '#colaboradores' },
            { texto: 'Contacto', href: 'mailto:correo@ejemplo.com' },
        ],
    }
]
</script>

<template>
    <footer class="border-t border-borde bg-fondo text-texto">
        <div class="mx-auto max-w-7xl px-4 pb-8 pt-14 xxs:px-5 xs:px-6 md:px-16">
            <nav
                aria-label="Enlaces del pie de página"
                class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8"
            >
                <div v-for="columna in columnas" :key="columna.titulo">
                    <h3 class="text-sm font-medium text-opaco">{{ columna.titulo }}</h3>
                    <ul class="mt-4 space-y-3">
                        <li v-for="enlace in columna.enlaces" :key="enlace.texto">
                            <a
                                :href="enlace.href"
                                class="text-sm text-texto no-underline transition-colors hover:text-lcc"
                            >
                                {{ enlace.texto }}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="mt-14 flex flex-col items-center gap-6 border-t border-borde pt-6 md:flex-row md:justify-between">
                <div class="flex items-center gap-5 text-opaco">
                    <a href="https://github.com/tu-usuario" aria-label="GitHub" class="transition-colors hover:text-lcc">
                        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </a>
                </div>

                <p class="text-center text-sm text-opaco">
                    © {{ anio }} Curso Orientativo para Estudiantes · LCC
                </p>

                <span class="inline-flex items-center gap-2 rounded-full border border-borde bg-tarjeta px-4 py-2 text-sm">
                    <svg class="size-4 text-opaco" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>Español</span>
                    <span class="text-opaco">México</span>
                </span>
            </div>
        </div>
    </footer>
</template>