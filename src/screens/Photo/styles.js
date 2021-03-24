import { StyleSheet } from "react-native";
import Constants from "expo-constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
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
  imageContainer: {
    flex: 1,
    padding: 20,
    height: "100%",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footerButton: {
    padding: 10,
  },
});
