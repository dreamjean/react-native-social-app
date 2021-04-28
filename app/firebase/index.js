import "firebase/auth";
import "firebase/firestore";

import * as firebase from "firebase";

import keys from "./keys";

// firebase只能初始化一次
if (!firebase.apps.length) {
  firebase.initializeApp(keys.FIREBASE_CONFIG);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db, firebase };
