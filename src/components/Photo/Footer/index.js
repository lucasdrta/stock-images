import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Feather name="plus-circle" size={26} color="#40494E" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Feather name="download" size={26} color="#40494E" />
      </TouchableOpacity>
    </View>
  );
}
