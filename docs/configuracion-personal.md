# Configuración personal de Mis Finanzas

Conservar `js/config/firebase-config.js` al incorporar actualizaciones del proyecto original. La aplicación usa el proyecto personal `mis-finanzas-d5887` para autenticación, Firestore y mensajería. La configuración web de Firebase es pública; nunca guardar claves privadas de servicio en el cliente ni en Git.

## Antes de publicar

- En Firebase Authentication, confirmar Google habilitado y el dominio `estebanperezxd2000-bit.github.io` autorizado.
- Iniciar sesión con la cuenta habitual y verificar los saldos sin editar movimientos. No borrar datos locales ni importar una copia vacía.
- Revisar las reglas de Firestore del proyecto personal y su compatibilidad con `rev` y respaldos. No desplegar reglas ni migrar datos sin verificar primero.
- Para notificaciones, configurar la clave pública VAPID propia en `firebaseVapidKey`; si está vacía se usa la predeterminada del SDK. El secreto de GitHub Actions `FIREBASE_SERVICE_ACCOUNT_KEY` debe pertenecer al proyecto personal. El runner rechaza cualquier otro proyecto.
- El workflow CI conserva todas sus pruebas; solucionar fallos preexistentes antes de cambiar Pages a despliegue mediante Actions.

## Actualizaciones del proyecto original

Integrar cambios por Git en una rama, no copiar por encima toda la carpeta. Revisar el diff de la configuración y ejecutar `npm test` y `npm run smoke` antes de publicar. No reemplazar las credenciales privadas ni modificar datos de usuarios durante la integración.
