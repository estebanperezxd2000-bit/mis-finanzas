# Versión responsive para PC

Se integró el diseño de escritorio del archivo `mis-finanzas-pc.zip` en el proyecto actualizado de `mis-finanzas-main.zip`, **sin reemplazar sus archivos JavaScript ni sus módulos funcionales**.

- **Hasta 699 px:** se conserva el diseño original para celulares.
- **De 700 a 1023 px:** la aplicación aprovecha el ancho de tabletas y ventanas pequeñas, con navegación inferior.
- **Desde 1024 px:** menú vertical a la izquierda, cabecera y contenido amplio a la derecha, y ventanas de edición centradas.
- **Desde 1600 px:** aumenta el espacio disponible para tableros anchos.

El diseño está en `css/desktop.css`, enlazado después de `css/styles.css` en `index.html`. El archivo `sw.js` debe actualizarse con `node scripts/sellar-sw.js` para que el CSS nuevo también funcione sin conexión y se invalide la caché de versiones antiguas. No se necesitan dependencias nuevas para publicar la app.

Para probar, sirve la carpeta por HTTP/HTTPS (por ejemplo, con `python -m http.server 8000`), abre `index.html` en el navegador y cambia el ancho de la ventana o usa las herramientas de desarrollo. Para validar los tests del proyecto: `npm install && npm test` (los tests requieren Node.js; el despliegue no).
