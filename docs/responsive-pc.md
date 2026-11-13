# Diseño adaptable a computador

## Qué se hizo

Se tomó **index-pc.html como referencia visual** para adaptar la aplicación real `mis-finanzas-main`, sin reemplazar la lógica de Firebase ni usar los saldos de demostración del ejemplo.

- **Escritorio (desde 960 px):** menú lateral con todas las secciones, encabezado con buscador y botón de agregar, e Inicio con estadísticas y paneles en dos columnas.
- **Tabletas (700 a 959 px):** paneles amplios y barra de navegación inferior.
- **Celulares (menos de 700 px):** se mantiene la estructura, navegación y orden del Inicio original.
- Las ventanas para registrar movimientos y acciones financieras se muestran centradas en pantallas grandes.

## Archivos modificados

- `index.html`: barra lateral, encabezado y distribución de Inicio, sin cambiar los IDs existentes.
- `css/desktop.css`: reglas responsive nuevas.
- `js/core/navegacion.js`: estados activos de la barra lateral y título por sección.
- `js/core/modulos-activos.js`: respeta si Spotify y Mesada están activos al mostrar el menú lateral.
- `sw.js`: actualizado con la nueva huella y la hoja de estilos para la caché sin conexión.

## Cómo usarlo

Abre la misma aplicación de siempre desde tu hosting. No reemplaces `index.html` por `index-pc.html`: el archivo `index-pc.html` era solo una referencia visual y sus datos eran de ejemplo. Deben publicarse `index.html`, `css/desktop.css`, `sw.js` y los demás archivos de la carpeta.

La aplicación sigue necesitando su inicio de sesión y su conexión de Firebase habitual para cargar tus datos reales. El diseño no modifica saldos ni movimientos.
