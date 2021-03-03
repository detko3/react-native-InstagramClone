import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const Body = ({ imageUri }) => {
  return <Image source={imageUri} style={styles.image} />;
};

export default Body;
