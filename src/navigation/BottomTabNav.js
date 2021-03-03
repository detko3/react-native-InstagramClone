import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import HomeNav from "./HomeNav";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return focused ? (
              <MaterialCommunityIcons
                name="home-variant"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Search") {
            return focused ? (
              <FontAwesome name="search" size={size} color={color} />
            ) : (
              <Feather name="search" size={size} color={color} />
            );
          }
          if (route.name === "Reels") {
            return focused ? (
              <Ionicons name="videocam" size={size} color={color} />
            ) : (
              <Ionicons name="videocam-outline" size={size} color={color} />
            );
          }
          if (route.name === "Shop") {
            return focused ? (
              <MaterialCommunityIcons
                name="shopping"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="shopping-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Profile") {
            return focused ? (
              <Ionicons name="person" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeNav} />
      <Tab.Screen name="Search" component={ProfileScreen} />
      <Tab.Screen name="Reels" component={ProfileScreen} />
      <Tab.Screen name="Shop" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
