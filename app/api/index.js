import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import keys from "./keys";

const app = initializeApp(keys.FIREBASE_CONFIG);
export const firebaseAuth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default {
  db,
  firebaseAuth,
  storage,
};
