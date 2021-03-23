import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./screens/Feed";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}
