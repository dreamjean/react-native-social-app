import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { CreatePostScreen, MediaSelectionScreen } from "../screens";

const Stack = createStackNavigator();

const PostNavigator = () => (
  <Stack.Navigator
    initialRouteName="CreatePost"
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
    <Stack.Screen name="CeatePost" component={CreatePostScreen} />
    <Stack.Screen name="MediaSelection" component={MediaSelectionScreen} />
  </Stack.Navigator>
);

export default PostNavigator;
