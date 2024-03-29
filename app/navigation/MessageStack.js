import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../config";
import { ChatScreen, MessageScreen } from "../screens";

const Stack = createStackNavigator();

const MessageStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: colors.blue,
      },
      headerStyle: {
        backgroundColor: colors.light2,
      },
    }}
  >
    <Stack.Screen name="Message" component={MessageScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route?.params?.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

export default MessageStack;
