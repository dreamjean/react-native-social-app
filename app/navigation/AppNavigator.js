import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  PostScreen,
  ProfileScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
