import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Pressable } from "react-native";

import { theme } from "../config";
import { HomeScreen, PostScreen } from "../screens";

const { colors, fonts, size, space } = theme;

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: "RN Social",
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.blue,
          fontFamily: fonts[0],
          fontSize: size.m2,
          top: space.s2,
        },
        headerStyle: {
          shadowColor: colors.white,
          elevation: 0,
        },
        headerRight: () => (
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              top: space.s2,
              right: space.s2,
            })}
            onPress={() => navigation.navigate("Post")}
          >
            <Entypo name="plus" size={32} color={colors.blue} />
          </Pressable>
        ),
      })}
    />
    <Stack.Screen
      name="Post"
      component={PostScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
