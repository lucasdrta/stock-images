import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginBottom: 10,
    width: 280,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
  logo: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1, 
    alignItems: 'center',
    paddingBottom: 32
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 20,
    width: 25,
    height: 25,
  }
});
