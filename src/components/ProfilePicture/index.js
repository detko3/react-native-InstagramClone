import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ imageUri, size = 70 }) => {
  return (
    <View style={[styles.container, { height: size + 10, width: size + 10 }]}>
      <Image
        source={imageUri}
        style={[styles.image, { width: size, height: size }]}
      />
    </View>
  );
};

export default ProfilePicture;
