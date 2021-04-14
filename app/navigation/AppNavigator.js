import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { HomeScreen, NotificationScreen, ProfileScreen } from "../screens";
import MessageStack from "./MessageStack";
import NewButton from "./NewButton";
import PostNavigator from "./PostNavigator";

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

      case "Notification":
        iconName = "bell-outline";
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

const MainNavigator = () => (
  <Tab.Navigator
    {...{ screenOptions }}
    tabBarOptions={{
      safeAreaInsets: {
        bottom: 3,
      },
      showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Message" component={MessageStack} />
    <Tab.Screen
      name="Post"
      component={PostNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewButton onPress={() => navigation.navigate("Post")} />
        ),
      })}
    />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
