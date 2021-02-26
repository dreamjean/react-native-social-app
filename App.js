import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";

import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();

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
    <Theme>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Theme>
  );
}
