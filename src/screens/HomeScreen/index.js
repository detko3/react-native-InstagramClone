import React from "react";
import { Text, SafeAreaView } from "react-native";

import Posts from "../../components/Posts";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Posts />
    </SafeAreaView>
  );
};

export default HomeScreen;
