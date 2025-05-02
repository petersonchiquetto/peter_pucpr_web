import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD-qaHJ4_0I0f9ez-JrWbEyCbHz9b9WlsM",
    authDomain: "peterpucprweb.firebaseapp.com",
    projectId: "peterpucprweb",
    storageBucket: "peterpucprweb.firebasestorage.app",
    messagingSenderId: "877126086041",
    appId: "1:877126086041:web:dad0d8229b62767e6a3708",
    measurementId: "G-CJBYVCZSX9"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
