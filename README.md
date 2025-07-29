# LATAIE - Laboratorio de Tecnologías Avanzadas en Inteligencia y Educación

Este es el repositorio del sitio web del Laboratorio de Tecnologías Avanzadas en Inteligencia y Educación (LATAIE), desarrollado con React y Tailwind CSS.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias Principales](#dependencias-principales)
- [Desarrollo y Estilo](#desarrollo-y-estilo)
- [Créditos y Licencia](#créditos-y-licencia)

## Descripción

El sitio web presenta información sobre el laboratorio, su equipo de trabajo, eventos, publicaciones y datos relevantes de la ENES Morelia. Incluye secciones interactivas como carruseles de eventos y tarjetas animadas para el equipo.

## Estructura del Proyecto

```
src/
  assets/           # Imágenes y recursos gráficos
  components/       # Componentes React reutilizables
    Footer/
    Header/
    Sections/
  data/             # Archivos JSON con datos de eventos y equipo
  App.js            # Componente principal
  index.js          # Punto de entrada de la aplicación
  index.css         # Estilos globales (Tailwind)
  ...
public/             # Archivos estáticos y plantilla HTML
```

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL-del-repositorio>
   cd LATAIE
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm start
   ```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts Disponibles

- `npm start` — Inicia la aplicación en modo desarrollo.
- `npm run build` — Genera una versión optimizada para producción.
- `npm test` — Ejecuta los tests con Jest y React Testing Library.

## Dependencias Principales

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) (íconos)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

## Desarrollo y Estilo

- Los estilos se gestionan con Tailwind CSS.
- Las fuentes principales son Ubuntu y Montserrat (Google Fonts).
- Los datos de eventos y equipo se encuentran en archivos JSON en [`src/data`](src/data).
- Los componentes principales están en [`src/components`](src/components).
