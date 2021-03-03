import React from "react";
import { Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import ProfilePicture from "../../ProfilePicture";
import styles from "./styles";

const Header = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <ProfilePicture imageUri={data.profilePicture} size={35} />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Entypo name="dots-three-vertical" size={20} />
    </View>
  );
};

export default Header;
