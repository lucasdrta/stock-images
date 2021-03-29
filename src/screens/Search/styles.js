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
  backButton: {
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  formConatiner: {
    backgroundColor: "#fff",
    padding: 10,
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#EAECEE",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  result: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  resultText: {
    fontSize: 22,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  photoButton: {
    width: "50%",
  },
  anything: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  anythingText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#424242",
  },
});
