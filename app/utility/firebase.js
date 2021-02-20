import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCn63kXkKE3buZIE2BC4rmxQR9bRizXy00",
  authDomain: "socialapp-1bcb1.firebaseapp.com",
  projectId: "socialapp-1bcb1",
  storageBucket: "socialapp-1bcb1.appspot.com",
  messagingSenderId: "530847866697",
  appId: "1:530847866697:web:46406de0695601ef3dc498",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const dbh = firebase.firestore();

// dbh.collection("characters").doc("mario").set({
//   employment: "plumber",
//   outfitColor: "red",
//   specialAttack: "fireball",
// });

export const Firebase = {};
