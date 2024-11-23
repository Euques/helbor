// Importar funções do Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'
import { getStorage } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js'
import { getMessaging } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js'

// Configuração do Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyB8-03eq_8LCMfcxuY-Z4eCVWV32Ad4lfQ',
  authDomain: 'feira-265d4.firebaseapp.com',
  databaseURL: 'https://feira-265d4-default-rtdb.firebaseio.com',
  projectId: 'feira-265d4',
  storageBucket: 'feira-265d4.firebasestorage.app',
  messagingSenderId: '124883888377',
  appId: '1:124883888377:web:c4e8c834b313127f6a5a28',
  measurementId: 'G-2QFQD5NGXR'
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Instâncias dos serviços
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const messaging = getMessaging(app)

// Exportar instâncias
export { app, analytics, auth, db, storage, messaging }
