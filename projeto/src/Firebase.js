import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAGSXXbhrAWqSCnWBX1deVWUzqr9pw75Pg",
  authDomain: "sistemaweb2025-1a914.firebaseapp.com",
  projectId: "sistemaweb2025-1a914",
  storageBucket: "sistemaweb2025-1a914.firebasestorage.app",
  messagingSenderId: "312777645865",
  appId: "1:312777645865:web:803aff93868cb45bb66138",
  measurementId: "G-W9N1VXJGR3"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
