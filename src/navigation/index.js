import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

import BottomTabNavigator from "./BottomTabNav";
import StoryScreen from "../screens/StoryScreen";

const RootStack = createStackNavigator();

const Navigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
