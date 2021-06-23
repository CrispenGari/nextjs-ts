import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKwym1CN_M2WRY2qmY0Ev1dsTPEkd47CU",
  authDomain: "netflix-next-a2766.firebaseapp.com",
  projectId: "netflix-next-a2766",
  storageBucket: "netflix-next-a2766.appspot.com",
  messagingSenderId: "940191900953",
  appId: "1:940191900953:web:b02eefbf7b877c0549d188",
  measurementId: "G-QRGB13BP0Y",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth };
