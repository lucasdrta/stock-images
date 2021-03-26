import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profile: {
    borderWidth: 1,
    borderColor: "#40494E",
    padding: 5,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  footerButton: {
    padding: 10,
  },
});
