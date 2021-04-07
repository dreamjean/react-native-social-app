import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { MessageScreen, ProfileScreen } from "../screens";
import FeedNavigator from "./FeedNavigator";

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    switch (route.name) {
      case "Feed":
        iconName = "home-outline";
        break;

      case "Message":
        iconName = "message-processing-outline";
        break;

      case "Profile":
        iconName = "account-outline";
        break;

      default:
        iconName = "home-outline";
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  },
});

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    {...{ screenOptions }}
    tabBarOptions={{
      safeAreaInsets: {
        bottom: 3,
      },
    }}
  >
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
