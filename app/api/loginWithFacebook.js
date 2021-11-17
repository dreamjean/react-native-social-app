import * as Facebook from "expo-facebook";

import { auth, firebase } from ".";
import keys from "./keys";

const loginWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync({
      appId: keys.FACEBOOK_APP_ID,
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"], // 指定要从Facebook要求登录的权限,
    });

    if (type === "success") {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); //设置持久身份验证状态

      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      await auth.signInWithCredential(credential);
    } else {
      return { type: "cancel" };
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export default loginWithFacebookAsync;
