import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase";
import React from "react";

import firebaseConfig from "../config/firebase";

export const FirebaseContext = React.createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const { uid } = Firebase.getCurrentUser();

      let profilePhotoUrl = "default";

      db.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      if (user.profilePhoto) {
        profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
      }

      return { ...user, profilePhotoUrl, uid };
    } catch (error) {
      console.log("Error @createUser: ", error.message);
    }
  },

  uploadProfilePhoto: async (uri) => {
    const { uid } = Firebase.getCurrentUser();

    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhotos").child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("users").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (error) {
      console.log("Error @uploadProfilePhoto: ", error);
    }
  },

  getBlob: async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        reject(new TypeError("Network requrest failed."));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  },
};

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={Firebase}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
