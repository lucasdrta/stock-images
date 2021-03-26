import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
