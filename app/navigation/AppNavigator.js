import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { ChatScreen, MediaSelectionScreen } from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      cardOverlayEnabled: true,
      headerStatusBarHeight:
        navigation
          .dangerouslyGetState()
          .routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
      ...TransitionPresets.ModalPresentationIOS,
    })}
  >
    <Stack.Screen name="Main" component={MainNavigator} />
    <Stack.Screen name="MediaSelection" component={MediaSelectionScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
