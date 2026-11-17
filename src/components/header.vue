<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Enlaces a las secciones de Inicio.vue. Cada href debe coincidir con el id de una <section>.
const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Temario', href: '#indice' },
    { label: 'Colaboradores', href: '#colaboradores' },
]

// Acción principal del encabezado.
const cta = { label: 'Comenzar', href: '#comenzar' }

const menuOpen = ref(false)
const activeId = ref('inicio')
const headerEl = ref(null)
const toggleButton = ref(null)

let desktopQuery = null
let observer = null

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
    menuOpen.value = false
}

const isActive = (href) => activeId.value === href.slice(1)

const handleBreakpoint = (event) => {
    if (event.matches) closeMenu()
}

const handleKeydown = (event) => {
    if (event.key !== 'Escape' || !menuOpen.value) return
    closeMenu()
    toggleButton.value?.focus()
}

const handleClickOutside = (event) => {
    if (menuOpen.value && !headerEl.value?.contains(event.target)) closeMenu()
}

onMounted(() => {
    desktopQuery = window.matchMedia('(min-width: 1024px)')
    desktopQuery.addEventListener('change', handleBreakpoint)
    window.addEventListener('keydown', handleKeydown)
    document.addEventListener('pointerdown', handleClickOutside)

    // Marca como activo el enlace de la sección que cruza el centro de la pantalla.
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) activeId.value = entry.target.id
            })
        },
        { rootMargin: '-45% 0px -50% 0px' }
    )

    const targets = [...links, cta]
    targets.forEach(({ href }) => {
        const section = document.querySelector(href)
        if (section) observer.observe(section)
    })
})

onBeforeUnmount(() => {
    desktopQuery?.removeEventListener('change', handleBreakpoint)
    window.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('pointerdown', handleClickOutside)
    observer?.disconnect()
})
</script>

<template>
    <header
        ref="headerEl"
        class="sticky top-0 z-50 border-b border-borde bg-fondo px-6 text-texto backdrop-blur md:px-16"
    >
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
            <a
                href="#inicio"
                aria-label="Ir al inicio"
                class="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-lcc"
                @click="closeMenu"
            >
                <img src="/LogoLCC.svg" alt="" class="h-8 w-auto" />
            </a>

            <nav aria-label="Principal" class="hidden items-center gap-7 lg:flex">
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    :aria-current="isActive(link.href) ? 'location' : null"
                    class="group relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-lcc"
                    :class="isActive(link.href) ? 'text-texto' : 'text-opaco hover:text-texto'"
                >
                    {{ link.label }}
                    <span
                        aria-hidden="true"
                        class="absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-lcc transition-transform duration-200 ease-out motion-reduce:transition-none"
                        :class="isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'"
                    ></span>
                </a>

                <a
                    :href="cta.href"
                    class="rounded-full bg-lcc px-5 py-2 text-sm font-semibold text-texto no-underline shadow-lg shadow-lcc/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lcc"
                >
                    {{ cta.label }}
                </a>
            </nav>

            <button
                ref="toggleButton"
                type="button"
                class="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-borde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-lcc lg:hidden"
                aria-label="Menú"
                aria-controls="menu-movil"
                :aria-expanded="menuOpen"
                @click="toggleMenu"
            >
                <span
                    aria-hidden="true"
                    class="block h-0.5 w-5 bg-texto transition duration-300 ease-out motion-reduce:transition-none"
                    :class="menuOpen ? 'translate-y-[7px] rotate-45' : ''"
                ></span>
                <span
                    aria-hidden="true"
                    class="block h-0.5 w-5 bg-texto transition duration-200 ease-out motion-reduce:transition-none"
                    :class="menuOpen ? 'opacity-0' : ''"
                ></span>
                <span
                    aria-hidden="true"
                    class="block h-0.5 w-5 bg-texto transition duration-300 ease-out motion-reduce:transition-none"
                    :class="menuOpen ? '-translate-y-[7px] -rotate-45' : ''"
                ></span>
            </button>
        </div>

        <Transition
            enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
            enter-from-class="opacity-0 -translate-y-2"
            leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <nav
                v-show="menuOpen"
                id="menu-movil"
                aria-label="Menú móvil"
                class="absolute inset-x-0 top-full flex flex-col border-b border-borde bg-fondo shadow-lg lg:hidden"
            >
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    :aria-current="isActive(link.href) ? 'location' : null"
                    class="flex min-h-11 items-center border-t border-borde px-6 py-3 hover:bg-tarjeta focus-visible:-outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lcc"
                    :class="isActive(link.href) ? 'text-lcc' : ''"
                    @click="closeMenu"
                >
                    {{ link.label }}
                </a>

                <a
                    :href="cta.href"
                    class="m-4 rounded-full bg-lcc py-3 text-center font-semibold text-texto shadow-lg shadow-lcc/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lcc"
                    @click="closeMenu"
                >
                    {{ cta.label }}
                </a>
            </nav>
        </Transition>
    </header>
</template>