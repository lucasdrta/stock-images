import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImgStock</Text>
      <TouchableOpacity style={styles.searchButton}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
