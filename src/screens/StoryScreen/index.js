import React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import data from "../../components/data";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const StoryScreen = ({
  route: {
    params: { id: userId },
  },
}) => {
  const activeUser = data.find((item) => item.id === userId);
  const navigation = useNavigation();

  const [storyIndex, setStoryIndex] = useState(null);

  useEffect(() => {
    setStoryIndex(0);
  }, [userId]);

  const handleRight = () => {
    if (storyIndex < activeUser.stories.length - 1) {
      setStoryIndex(parseInt(storyIndex) + 1);
    } else {
      if (data.some((item) => item.id == parseInt(userId) + 1)) {
        navigation.navigate("Story", { id: (parseInt(userId) + 1).toString() });
      } else {
        navigation.goBack();
      }
    }
  };

  const handleLeft = () => {
    if (storyIndex > 0) {
      setStoryIndex(parseInt(storyIndex) - 1);
    } else {
      if (data.some((item) => item.id == parseInt(userId) - 1)) {
        navigation.navigate("Story", { id: (parseInt(userId) - 1).toString() });
      } else {
        navigation.goBack();
      }
    }
  };

  const hadleTouchEvent = (evt) => {
    evt.nativeEvent.locationX > Dimensions.get("window").width / 2
      ? handleRight()
      : handleLeft();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={(evt) => hadleTouchEvent(evt)}>
        <ImageBackground
          source={activeUser.stories[storyIndex]}
          style={styles.imageBackroud}
        >
          <View style={styles.profileContainer}>
            <ProfilePicture imageUri={activeUser.imageUri} size={40} />
            <Text style={styles.nameText}>{activeUser.name}</Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            editable
            placeholder="Send message"
            placeholderTextColor={"white"}
          />
          <MaterialIcons name="insert-emoticon" size={25} color={"white"} />
        </View>
        <Ionicons name="paper-plane-outline" size={25} color={"white"} />
      </View>
    </SafeAreaView>
  );
};

export default StoryScreen;
