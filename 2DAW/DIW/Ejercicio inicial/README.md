Este es un ejercicio que representa una página web simple para un curso de Desarrollo de Aplicaciones Web (DAW). La estructura y contenido de la página están diseñados para proporcionar información sobre los módulos del curso, el horario, la ubicación y enlaces de interés. A continuación, se detalla la estructura y los elementos clave de la página.

## Contenido

- `asignaturas.sass`: Archivo de estilo que se aplica a la página.
- `horario.PNG`: Imagen que muestra el horario del curso.
- `uni3.jpg`: Imagen de la ubicación del centro educativo.
- `mapa.js`: Script que utiliza Leaflet.js para mostrar un mapa interactivo.

## Estructura de la Página

1. **Cabecera (`<head>`):**
   - Charset y viewport definidos.
   - Enlace a la hoja de estilos `asignaturas.sass`.
   - Referencia a la biblioteca Leaflet para mapas interactivos.
   - Título de la página: "DAW".

2. **Cuerpo (`<body>`):**
   - **Sección de Módulos (`#modulos`):**
     - Información organizada por año y módulo.
     - Cada módulo contiene el nombre de la asignatura y una breve descripción.
   
   - **Sección de Horario (`#horario`):**
     - Título "HORARIO".
     - Imagen del horario (`horario.PNG`).

   - **Sección de Ubicación (`#ubicacion`):**
     - Título "DÓNDE ESTAMOS".
     - Imagen de la ubicación (`uni3.jpg`).
     - Mapa interactivo implementado con Leaflet.js (ver `mapa.js`).
   
   - **Sección de Información Adicional (`#info`):**
     - Título "MÁS INFORMACIÓN DE INTERÉS".
     - Botones que redirigen a sitios web externos.
     - Firma del autor.

## Uso de Scripts

- **`mapa.js`:**
  - Implementa un mapa interactivo utilizando Leaflet.js.
  - Se incluye al final del cuerpo de la página.

- **Funciones JavaScript:**
  - `irCentro()`: Redirige a la página web del centro educativo.
  - `irGVA()`: Redirige a la página de información de la Generalitat Valenciana.
  
## Información Adicional

- **Autor:** Cecilia Cortés Velert.
- **Curso:** 2º Desarrollo de Aplicaciones Web (DAW).

---

Este ejercicio fue creado como parte de una práctica para demostrar la estructura básica de una página web utilizando HTML y CSS, así como la incorporación de funcionalidades interactivas mediante JavaScript y el uso de bibliotecas externas como Leaflet.js.
