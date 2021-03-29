import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoryContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#40494E",
    marginHorizontal: 10,
  },
  categoryItemActive: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#40494E",
    borderColor: "#40494E",
    marginHorizontal: 10,
  },
  categoryItemText: {
    fontSize: 14,
    color: "#40494E",
  },
  categoryItemTextActive: {
    fontSize: 14,
    color: "#fff",
  },
});
