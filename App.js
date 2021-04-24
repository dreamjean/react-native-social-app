import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import AuthContext from "./app/auth/authContext";
import { Theme } from "./app/components";
import { firebase } from "./app/firebase";
import useLoadAssets from "./app/hooks/useLoadAssets";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

if (Platform.OS === "android") {
  LogBox.ignoreLogs([""]); //android登錄時會有長時間計時器的黃色警告
}

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();
  const [initializing, setInitalizing] = useState(true);

  const onAuthStateChanged = (user) => {
    if (user) {
      setUser(user);
      setInitalizing(false);
    } else {
      setInitalizing(false);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
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
    <AuthContext.Provider value={{ user, setUser }}>
      <Theme>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Theme>
    </AuthContext.Provider>
  );
}
