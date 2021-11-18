import "dotenv/config";

import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

const firebaseAuth = getAuth();

const login = async (email, password) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

const logout = async () => await signOut(firebaseAuth);

const loginWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync({
      appId: process.env.FACEBOOK_APP_ID,
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"], // 指定要从Facebook要求登录的权限,
    });

    if (type === "success") {
      const facebookAuthProvider = new FacebookAuthProvider();
      const credential = facebookAuthProvider.credential(token);

      await signInWithCredential(credential);
    } else {
      return { type: "cancel" };
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

const loginWithGoogleAsync = async () => {
  try {
    const { type, idToken, accessToken } = await Google.logInAsync({
      iosClientId: process.env.GOOGLe_IOS_CLIENT_ID_FOR_EXPO,
      androidClientId: process.env.GOOGLE_ANDROID_CLIENT_ID_FOR_EXPO,
    });

    if (type === "success") {
      const googleAuthProvider = new GoogleAuthProvider();

      const credential = googleAuthProvider.credential(idToken, accessToken);

      await signInWithCredential(credential);
    } else {
      return { cancelled: true };
    }
  } catch ({ message }) {
    alert(`Google login error: ${message}`);
  }
};

const register = async (email, password) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

const updateAuthInfo = async (userInfo) =>
  await updateProfile(firebaseAuth.currentUser, {
    displayName: userInfo.displayName,
    photoURL: userInfo.photo,
  });

const updateAuthEmail = async (email) =>
  await updateEmail(firebaseAuth.currentUser, email);

const updateAuthPassword = async (password) =>
  await updatePassword(firebaseAuth.currentUser, password);

export default {
  login,
  loginWithFacebookAsync,
  loginWithGoogleAsync,
  logout,
  register,
  updateAuthInfo,
  updateAuthEmail,
  updateAuthPassword,
};
