import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import { auth } from "./app/api";
import AuthContext from "./app/auth/authContext";
import { Theme } from "./app/components";
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
  LogBox.ignoreLogs(["Setting a timer for a long period of time"]); //android登錄時會有長時間計時器的黃色警告
}

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = (userExist) => {
    if (userExist) {
      setUser(userExist);
    }
    if (initializing) setInitializing(false);
  };

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
