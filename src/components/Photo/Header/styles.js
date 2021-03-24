import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  likeButton: {
    borderWidth: 1,
    borderRadius: 20,
    width: 90,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
