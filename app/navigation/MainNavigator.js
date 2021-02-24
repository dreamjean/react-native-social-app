import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { theme } from "../config";
import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  PostScreen,
  ProfileScreen,
} from "../screens";

const { colors, space } = theme;

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: colors.dark,
    paddingBottom: space.s2,
  },
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size }) => {
    let iconName;

    switch (route.name) {
      case "Home":
        iconName = "ios-home";
        break;

      case "Message":
        iconName = "ios-chatbubbles";
        break;

      case "Notification":
        iconName = "ios-notifications";
        break;

      case "Profile":
        iconName = "ios-person";
        break;

      default:
        iconName = "ios-home";
    }

    if (route.name === "Post")
      return (
        <Ionicons
          name="ios-add-circle"
          size={48}
          color={colors.blue2}
          style={{
            shadowColor: colors.blue2,
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            shadowOpacity: 0.3,
            elevation: 20,
            position: "absolute",
            top: -3,
          }}
        />
      );

    return (
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? colors.white : colors.medium}
      />
    );
  },
});

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator {...{ tabBarOptions, screenOptions }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
