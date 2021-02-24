import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import FirebaseProvider from "./app/api/FirebaseContext";
import AuthContext from "./app/auth/authContext";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    uid: "",
    isloggedIn: null,
    profilePhoto: "default",
  });

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <FirebaseProvider>
      <AuthContext.Provider value={{ user, setUser }}>
        <Theme>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Theme>
      </AuthContext.Provider>
    </FirebaseProvider>
  );
}
