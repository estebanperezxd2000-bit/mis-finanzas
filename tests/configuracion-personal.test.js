const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const raiz = path.resolve(__dirname, '..');
const leer = p => fs.readFileSync(path.join(raiz, p), 'utf8');

test('Firebase conserva el proyecto personal y Auth y FCM usan la misma configuración', async () => {
  const { firebaseConfig } = await import('../js/config/firebase-config.js');
  assert.equal(firebaseConfig.projectId, 'mis-finanzas-d5887');
  assert.equal(firebaseConfig.authDomain, firebaseConfig.projectId + '.firebaseapp.com');
  assert.equal(firebaseConfig.messagingSenderId, '627629085197');
  assert.match(firebaseConfig.appId, /^1:627629085197:web:/);
  const auth = leer('js/core/firebase-init.js');
  const push = leer('js/core/notificaciones-push.js');
  assert.match(auth, /import \{ firebaseConfig \} from '..\/config\/firebase-config\.js';/);
  assert.match(auth, /initializeApp\(firebaseConfig\)/);
  assert.match(push, /_FCM_CONFIG = firebaseConfig/);
  assert.doesNotMatch(auth + push, /mis-finanzas-z/);
  const main = leer('js/main.js');
  assert.ok(main.indexOf("import './config/firebase-config.js';") < main.indexOf("import './core/notificaciones-push.js';"));
});
