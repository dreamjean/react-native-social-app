import "react-native-gesture-handler";
import "dotenv/config";

import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import AuthContext from "./app/auth/authContext";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);

const auth = getAuth();

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

if (Platform.OS === "android") {
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]); //android登錄時會有長時間計時器的黃色警告
}

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);

      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (!assetsLoaded || initializing) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ auth, user, setUser }}>
      <Theme>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Theme>
    </AuthContext.Provider>
  );
}
