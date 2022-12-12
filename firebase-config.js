import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


export const firebaseConfig = {
  apiKey: "AIzaSyB2kktRm-QZqaGXzGmy5oOGYum9A0dV-Qw",
  authDomain: "sdrop-c637c.firebaseapp.com",
  projectId: "sdrop-c637c",
  storageBucket: "sdrop-c637c.appspot.com",
  messagingSenderId: "678179209140",
  appId: "1:678179209140:web:e45a6662eb827dc42a3ce1"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);