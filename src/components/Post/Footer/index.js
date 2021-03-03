import React from "react";
import { useState, useEffect } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const Footer = ({ data }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const onLikePressed = () => {
    setIsClicked(!isClicked);
    const value = isClicked ? -1 : 1;
    setLikesCount(likesCount + value);
  };

  useEffect(() => {
    setLikesCount(data.likes);
  }, []);

  const likeIcon = isClicked ? (
    <AntDesign name={"heart"} size={27} color={"red"} />
  ) : (
    <AntDesign name={"hearto"} size={27} color={"black"} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {likeIcon}
          </TouchableWithoutFeedback>
          <Feather name={"message-circle"} size={27} />
          <Ionicons name={"paper-plane-outline"} size={27} />
        </View>
        <Feather name={"bookmark"} size={27} />
      </View>
      <Text style={styles.likesText}>{likesCount} likes</Text>
      <Text style={styles.commentText}>
        <Text style={styles.userText}>{data.name}</Text> {data.comment}
      </Text>
    </View>
  );
};

export default Footer;
