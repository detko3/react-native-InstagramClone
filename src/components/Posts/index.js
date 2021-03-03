import React from "react";
import { render } from "react-dom";
import { FlatList } from "react-native";

import Post from "../Post";
import UserStories from "../UserStories";

const data = [
  {
    id: "1",
    name: "papagaj1",
    profilePicture: require("../images/papagaj.jpg"),
    imageUri: require("../images/papagaj.jpg"),
    likes: 25,
    comment: "nice Papagaj",
  },
  {
    id: "2",
    name: "papagaj2",
    profilePicture: require("../images/papagaj2.jpg"),
    imageUri: require("../images/papagaj2.jpg"),
    likes: 35,
    comment: "hohohohohohoho",
  },
  {
    id: "3",
    name: "papagaj1",
    profilePicture: require("../images/papagaj3.jpg"),
    imageUri: require("../images/papagaj3.jpg"),
    likes: 100,
    comment: "random text ",
  },
];

const Posts = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Post data={item} />}
      ListHeaderComponent={UserStories}
    />
  );
};

export default Posts;
