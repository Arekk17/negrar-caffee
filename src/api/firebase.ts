import { API_KEY, APP_ID, AUTH_DOMAIN, MEASUERMENT_ID, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from '@env';
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUERMENT_ID,
};

  export const app = initializeApp(firebaseConfig)
  export const firestore = getFirestore(app)
  export const auth = getAuth(app)
  export const database = getDatabase(app)
  export const googleProvider = new GoogleAuthProvider()