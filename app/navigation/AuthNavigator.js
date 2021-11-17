import { createStackNavigator } from "@react-navigation/stack";

import { OnBoardingScreen, SignInScreen, SignUpScreen } from "../screens";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
