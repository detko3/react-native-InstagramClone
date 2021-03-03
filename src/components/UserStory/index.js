import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ProfilePicture from "../ProfilePicture";

const UserStory = ({ name, imageUri, id }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Story", { id: id })}
      >
        <ProfilePicture imageUri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default UserStory;
