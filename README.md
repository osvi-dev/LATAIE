# Documentación del Proyecto LATAIE

Este documento explica la estructura del proyecto y cómo agregar nuevo contenido en las secciones de **Equipo de Trabajo** y **Proyectos**.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera dentro de la carpeta `src`:

-   **`assets/`**: Contiene los archivos multimedia (imágenes) organizados por sección.
    -   `EquipoTrabajo/`: Fotos de los miembros del equipo.
    -   `Proyectos/`: Imágenes de los proyectos.
-   **`components/Sections/`**: Contiene los componentes de React para cada sección de la página.
    -   `EquipoTrabajo.jsx`: Componente que renderiza la lista de miembros.
    -   `Proyectos.jsx`: Componente que renderiza el carrusel de proyectos.
-   **`data/`**: Contiene archivos JSON con la información textual.
    -   `equipo.json`: Datos de los miembros del equipo (nombre, descripción, etc.).
    -   `proyectos.json`: Datos de los proyectos (título, clave de imagen).

---

## Cómo agregar fotos en "Equipo de Trabajo"

Para añadir un nuevo miembro al equipo con su foto, sigue estos pasos:

1.  **Agregar la imagen**:
    Guarda la foto del nuevo miembro en la carpeta:
    `src/assets/EquipoTrabajo/`

2.  **Registrar la imagen**:
    Edita el archivo `src/assets/EquipoTrabajo/index.js`.
    -   Importa la nueva imagen.
    -   Agrégala al objeto de exportación.
    ```javascript
    import NuevoMiembro from './FotoNuevoMiembro.png'; // 1. Importar

    export {
      FotoFroy,
      FotoHector,
      NuevoMiembro // 2. Exportar
    };
    ```

3.  **Actualizar el Componente**:
    Abre `src/components/Sections/EquipoTrabajo.jsx`.
    -   Importa la imagen desde el archivo index de assets.
    ```javascript
    import { FotoFroy, FotoHector, NuevoMiembro } from '../../assets/EquipoTrabajo';
    ```
    -   Agrega la imagen al `photoMap` asignándole un ID numérico (el que usarás en el JSON).
    ```javascript
    const photoMap = {
      1: FotoFroy,
      2: FotoHector,
      3: NuevoMiembro // Asigna el ID correspondiente
    };
    ```

4.  **Agregar Datos**:
    Abre `src/data/equipo.json` y agrega un nuevo objeto al array con el mismo ID que usaste en el paso anterior.
    ```json
    {
        "id": 3,
        "name": "Nombre del Miembro",
        "description": "Descripción del perfil...",
        "location": "ENES Morelia, UNAM"
    }
    ```

---

## Cómo agregar fotos en "Proyectos"

Para añadir un nuevo proyecto al carrusel:

1.  **Agregar la imagen**:
    Guarda la imagen del proyecto en:
    `src/assets/Proyectos/`

2.  **Actualizar el Componente**:
    Abre `src/components/Sections/Proyectos.jsx`.
    -   Importa la nueva imagen al principio del archivo.
    ```javascript
    import nuevoProyectoImg from '../../assets/Proyectos/NombreImagen.jpg';
    ```
    -   Agrégala al objeto `imageMap` con una clave única (key).
    ```javascript
    const imageMap = {
        'aprendi': aprendiImg,
        'ilustracion': ilustracionImg,
        'materiales': materialesImg,
        'clave_nueva': nuevoProyectoImg // Nueva entrada
    };
    ```

3.  **Agregar Datos**:
    Abre `src/data/proyectos.json` y agrega un nuevo objeto. Asegúrate de que `imageKey` coincida con la clave que creaste en el paso anterior.
    ```json
    {
        "id": 4,
        "title": "Título del Nuevo Proyecto",
        "imageKey": "clave_nueva"
    }
    ```
