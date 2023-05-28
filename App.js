import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import Screen1 from "./screens/Screen1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Resgister from "./screens/Resgister";

const Stacks = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Screen1" component={Screen1} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Onboadring" component={Onboarding} />
        <Stacks.Screen name="Login" component={Login} />
        <Stacks.Screen name="Resgister" component={Resgister} />
        <Stacks.Screen name="Drawer" component={MyDrawer} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}
