import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  iconsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 5,
  },
  leftIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
  likesText: {
    fontSize: 14,
    fontWeight: "700",
  },
  commentText: {
    fontSize: 14,
  },
  userText: {
    fontWeight: "700",
  },
});

export default styles;
