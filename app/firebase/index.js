import "firebase/auth";
import "firebase/firestore";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCxwd8EEYbsmUW0XKgBj0WKeZfQGrldX4",
  authDomain: "socialapp-c82cc.firebaseapp.com",
  databaseURL: "https: //socialapp-c82cc.firebaseio.com",
  projectId: "socialapp-c82cc",
  storageBucket: "socialapp-c82cc.appspot.com",
  messagingSenderId: "644520110653",
  appId: "1:644520110653:web:519f7d029daef35a745854",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db, firebase };
