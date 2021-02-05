import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AuthNavigator } from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
