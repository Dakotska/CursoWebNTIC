# Curso Orientativo NTIC — Guía de Laptops para LCC

Sitio web orientativo desarrollado para la materia de **Competencia Digital** de la **Licenciatura en Ciencias de la Computación (LCC)** en la **Universidad de Sonora (UNISON)**.

Su objetivo es ayudar a estudiantes de la carrera a evaluar y elegir una laptop adecuada según su presupuesto y carga académica, explicando de forma clara los componentes internos, gamas, marcas, perfiles de uso y puntos clave de revisión antes de comprar.

> **Nota:** Las especificaciones, generaciones de hardware y precios cambian con frecuencia. Usa esta guía como referencia técnica y verifica siempre los detalles del modelo antes de realizar una compra.

## Contenido del curso

El sitio organiza la información en seis módulos secuenciales con seguimiento de progreso:

1. **Arquitectura y hardware:** Procesador (CPU), memoria RAM, almacenamiento (HDD, SSD, NVMe), tarjeta gráfica (GPU) y pantalla.
2. **Ecosistemas y marcas:** Enfoque y líneas principales de fabricantes de uso general, gama premium/diseño, equipos orientados a gaming y líneas empresariales.
3. **Gamas y rendimiento:** Diferencias reales entre equipos de entrada, gama media y gama alta/workstation.
4. **Perfiles de uso:** Recomendaciones divididas en cuatro perfiles (estudios, gaming, trabajo/multitarea y entorno empresarial).
5. **Equipamiento y características externas:** Teclado, puertos, cámara, conectividad y listas de inspección para equipo nuevo, usado o reacondicionado.
6. **Repaso final:** Orden de prioridad al invertir y errores frecuentes que conviene evitar.

## Tecnologías y dependencias

El proyecto está construido como una Single Page Application (SPA) con **Vue 3** y **Vite**.

### Producción (`dependencies`)
* **vue (`^3.5.44`):** Framework principal de la interfaz, implementado con Composition API (`<script setup>`) y componentes reutilizables.
* **vue-router (`^5.5.1`):** Enrutamiento del lado del cliente entre la portada (`/`) y la vista del curso (`/Curso`), sincronizando el módulo activo mediante parámetros de consulta (`?tema=1` a `?tema=6`).
* **tailwindcss (`^4.3.5`) y `@tailwindcss/vite` (`^4.3.5`):** Framework de estilos utilitarios integrado directamente como plugin de Vite (sin archivo `tailwind.config.js` legado), conectado a variables CSS personalizadas con soporte automático para modo claro y oscuro (`prefers-color-scheme`).
* **@vercel/analytics (`^1.4.1`):** Medición ligera de visitas integrada en el componente raíz (`App.vue`).

### Desarrollo (`devDependencies`)
* **vite (`^8.3.4`):** Servidor de desarrollo con recarga rápida y empaquetador optimizado para producción.
* **@vitejs/plugin-vue (`^6.0.10`):** Soporte de compilación para archivos Single-File Component (`.vue`).

## Estructura del proyecto

```text
CursoWebNTIC/
├── public/
│   └── LogoLCC.svg                 # Favicon e isotipo de la licenciatura
├── src/
│   ├── assets/
│   │   ├── images/                 # Logotipos institucionales y fondos
│   │   ├── Videos/                 # Video de fondo (.webm / .mp4) y póster del hero
│   │   └── styles.css              # Variables de tema, fuentes y configuración de Tailwind v4
│   ├── components/
│   │   ├── header.vue              # Barra de navegación sticky con detección de sección activa y menú móvil
│   │   └── footer.vue              # Pie de página con enlaces de navegación y repositorio
│   ├── router/
│   │   └── index.js                # Definición de rutas (/, /Curso)
│   ├── views/
│   │   ├── Index.vue               # Portada: hero, temario general, colaboradores e info del proyecto
│   │   └── Curso.vue               # Vista interactiva de los 6 módulos con barra de progreso
│   ├── App.vue                     # Componente raíz y carga de Vercel Analytics
│   └── main.js                     # Inicialización de Vue y Vue Router
├── index.html                      # Documento base y carga de tipografías (Montserrat, Roboto, Roboto Mono)
├── package.json                    # Dependencias y scripts del proyecto
├── vercel.json                     # Regla de reescritura para rutas SPA en Vercel
└── vite.config.js                  # Configuración de plugins de Vite
```

## Requisitos previos

* **Node.js** 18 o superior (se recomienda versión LTS)
* **npm** (incluido con Node.js)
* **Git**

## Instalación y ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Dakotska/CursoWebNTIC.git
   cd CursoWebNTIC
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en el navegador la URL local que indica Vite (por defecto `http://localhost:5173`).

### Scripts disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Levanta el entorno de desarrollo local con recarga en caliente. |
| `npm run build` | Compila y optimiza la aplicación en la carpeta `dist/`. |
| `npm run preview` | Sirve localmente la compilación de `dist/` para verificar el resultado de producción. |

## Despliegue

El sitio está configurado para desplegarse en **Vercel** conectado al repositorio de GitHub. El archivo `vercel.json` redirige todas las rutas hacia `/index.html` para evitar errores `404` al recargar directamente sobre `/Curso`.

## Flujo de trabajo con Git

* `main`: rama estable en producción.
* `develop`: rama de integración de cambios probados.
* `feature/<nombre>`: ramas de trabajo para nuevas vistas, ajustes de diseño o contenido.

```bash
git checkout develop
git checkout -b feature/nombre-del-cambio
```

## Equipo de desarrollo

* **Ángel Adrián Barragán Ruiz** — Desarrollador y Diseñador Principal
* **Khristo Ricardo Rodríguez Valencia** — Estratega de Contenido Instruccional
* **Sergio Gabriel Silva Contreras** — Analista Técnico de Hardware
* **M.G.T.I. Adolfo Castillo Navarro** — Supervisor y Evaluador