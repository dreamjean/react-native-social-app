import "firebase/auth";

import firebase from "firebase";

const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log("Error @login: ", error.message);
  }
};

const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log("Error @logout: ", error.message);
  }
};

export default {
  login,
  logout,
};
