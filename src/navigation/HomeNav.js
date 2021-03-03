import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import { StackActions } from "@react-navigation/native";

const HomeStack = createStackNavigator();

const HomeNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerStyle: {
            // elevation: 0,
            // shadowOpacity: 0,
          },
          headerTitle: (props) => (
            <Image
              source={require("../components/images/logo.png")}
              style={{ width: 130, resizeMode: "contain" }}
            />
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                marginRight: 15,
                width: 120,
                justifyContent: "space-between",
              }}
            >
              <FontAwesome name="plus-square-o" size={27} />
              <AntDesign name="hearto" size={27} />
              <Ionicons name="paper-plane-outline" size={27} />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
