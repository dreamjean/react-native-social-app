import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";

import AuthContext from "../auth/authContext";
import { LoadingScreen } from "../screens";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user.isLoggedIn === null ? (
        <Stack.Screen name="Loading" component={LoadingScreen} />
      ) : user.isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
