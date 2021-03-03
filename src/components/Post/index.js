import React from "react";
import { View, FlatList } from "react-native";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Post = ({ data }) => {
  return (
    <View>
      <Header data={data} />
      <Body imageUri={data.imageUri} />
      <Footer data={data} />
    </View>
  );
};

export default Post;
