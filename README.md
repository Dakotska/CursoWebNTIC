# Guía de Laptops para LCC

Sitio web orientativo para estudiantes de la **Licenciatura en Ciencias de la Computación (LCC)** de la **Universidad de Sonora (UNISON)** que desean elegir o comprar una laptop adecuada para su carrera.

El sitio explica de forma sencilla los componentes principales de una laptop, sus usos, las gamas disponibles y qué características priorizar según el tipo de trabajo académico y de desarrollo.

> **Nota:** Este proyecto es orientativo. Los modelos, precios y especificaciones cambian con frecuencia, así que verifica siempre la información antes de comprar.

> 🚧 Proyecto en desarrollo.

## Objetivo

Ayudar a los estudiantes de LCC a:

- Entender qué componentes de una laptop son importantes y por qué.
- Identificar los requisitos de hardware que suelen necesitar las materias y herramientas de la carrera.
- Comparar gamas (entrada, media y alta) según su presupuesto.
- Tomar una decisión informada antes de comprar.

## Contenido del sitio

- **Componentes:** procesador (CPU), memoria RAM, almacenamiento, tarjeta gráfica (GPU), pantalla, batería, conectividad, teclado y sistema operativo.
- **Usos en la carrera:** programación, bases de datos, desarrollo web y móvil, máquinas virtuales y contenedores, machine learning, diseño y gráficos, entre otros.
- **Gamas:** explicación de laptops de entrada, media y alta, con perfiles recomendados para cada una.
- **Recomendaciones por presupuesto.**
- **Glosario** de términos técnicos.

## Tecnologías

- [Vue 3](https://vuejs.org/): framework para la interfaz.
- [Vite](https://vitejs.dev/): herramienta de desarrollo y empaquetado.
- [Git](https://git-scm.com/) y [GitHub](https://github.com/): control de versiones y colaboración.
- [Visual Studio Code](https://code.visualstudio.com/): editor de código.

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior (se recomienda la versión LTS).
- npm (se instala junto con Node.js).
- Git.
- VS Code con las siguientes extensiones recomendadas:
  - **Vue - Official**
  - **ESLint**
  - **Prettier**
  - **GitLens** (opcional)

## Instalación

1. Clona el repositorio:
```bash
   git clone https://github.com/[usuario]/[nombre-del-repo].git
```
2. Entra a la carpeta del proyecto:
```bash
   cd [nombre-del-repo]
```
3. Instala las dependencias:
```bash
   npm install
```
4. Inicia el servidor de desarrollo:
```bash
   npm run dev
```
5. Abre en tu navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión optimizada para producción en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente la versión de producción. |

## Estructura del proyecto

```
.
├── public/              # Archivos estáticos (íconos, imágenes)
├── src/
│   ├── assets/          # Estilos y recursos
│   ├── components/      # Componentes reutilizables (tarjetas, comparadores, etc.)
│   ├── views/           # Páginas principales del sitio
│   ├── router/          # Configuración de rutas (vue-router)
│   ├── App.vue          # Componente raíz
│   └── main.js          # Punto de entrada de la aplicación
├── index.html
├── package.json
└── vite.config.js
```

## Flujo de trabajo con Git

Usamos las siguientes ramas:

- `main`: versión estable del sitio.
- `feature/nombre-del-cambio`: ramas para nuevas funcionalidades o correcciones.

Para contribuir con un cambio:

```bash
git checkout -b