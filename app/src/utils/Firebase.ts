import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()
const db = firebase.firestore();
export  { auth, db}