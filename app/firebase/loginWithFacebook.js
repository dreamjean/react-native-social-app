import * as Facebook from "expo-facebook";

import { firebase } from ".";
import keys from "./keys";

const loginWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync({
      appId: keys.FACEBOOK_APP_ID,
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });

    if (type === "success") {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL); // 设置持久身份验证状态

      const credentdial = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInWithCredential(credentdial)
        .catch((error) => console.log("@Login failed", error));
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export default loginWithFacebookAsync;
