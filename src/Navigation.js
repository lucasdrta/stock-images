import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Feed from "./screens/Feed";
import Photo from "./screens/Photo";

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
