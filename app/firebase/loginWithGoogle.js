import * as Google from "expo-google-app-auth";

import { auth, firebase } from ".";
import keys from "./keys";

const loginWithGoogleAsync = async () => {
  try {
    const { type, idToken, accessToken } = await Google.logInAsync({
      iosClientId: keys.GOOGLe_IOS_CLIENT_ID_FOR_EXPO,
      androidClientId: keys.GOOGLE_ANDROID_CLIENT_ID_FOR_EXPO,
    });

    if (type === "success") {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); // 设置持久身份验证状态

      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );

      await auth.signInWithCredential(credential);
    } else {
      return { cancelled: true };
    }
  } catch ({ message }) {
    alert(`Google login error: ${message}`);
  }
};

export default loginWithGoogleAsync;
