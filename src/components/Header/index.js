import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Header() {
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate("Search");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImgStock</Text>
      <TouchableOpacity style={styles.searchButton} onPress={navigateToSearch}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
