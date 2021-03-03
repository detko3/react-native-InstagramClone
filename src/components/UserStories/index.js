import React from "react";
import { Text, SafeAreaView, FlatList } from "react-native";

import UserStory from "../UserStory";
import styles from "./styles";
import data from "../data";

const UserStories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <UserStory name={item.name} imageUri={item.imageUri} id={item.id} />
        )}
      />
    </SafeAreaView>
  );
};

export default UserStories;
