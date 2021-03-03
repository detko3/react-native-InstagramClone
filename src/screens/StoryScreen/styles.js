import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  imageBackroud: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  nameText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  bottomContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 16,
    color: "white",
  },
});

export default styles;
