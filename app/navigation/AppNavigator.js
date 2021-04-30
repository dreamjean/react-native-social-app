import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import {
  ChatScreen,
  EditProfileScreen,
  MediaSelectionScreen,
  PostScreen,
  ProfileScreen,
} from "../screens";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({ route, navigation }) => ({
      cardOverlayEnabled: true,
      headerStatusBarHeight:
        navigation
          .dangerouslyGetState()
          .routes.findIndex((r) => r.key === route.key) > 0
          ? 0
          : undefined,
    })}
  >
    <Stack.Screen
      name="Main"
      component={MainNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerBackTitleVisible: false,
        headerStatusBarHeight: undefined,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <Stack.Screen
      name="UserProfile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    />
    <Stack.Screen
      name="MediaSelection"
      component={MediaSelectionScreen}
      options={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route?.params?.userName,
        headerBackTitleVisible: false,
        headerStatusBarHeight: undefined,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    />
  </Stack.Navigator>
);

export default AppNavigator;
