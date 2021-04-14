import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ChatScreen, MessageScreen } from "../screens";

const Stack = createStackNavigator();

const MessageStack = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen name="Message" component={MessageScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

export default MessageStack;
