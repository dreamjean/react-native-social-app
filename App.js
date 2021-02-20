import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import AuthContext from "./app/auth/authContext";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import FirebaseProvider from "./app/utility/FirebaseContext";

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState({
    username: "",
    email: "",
    uid: "",
    isLoggedIn: null,
    profilePhotoUrl: "default",
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
            {user.isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </Theme>
      </AuthContext.Provider>
    </FirebaseProvider>
  );
}
