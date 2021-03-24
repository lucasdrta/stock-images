import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import styles from "./styles";
import Header from "../../components/Photo/Header";
import Footer from "../../components/Photo/Footer";

export default function Photo() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.imageContainer}>
        <Image source={{ uri: data.photo }} style={styles.image} />
      </View>

      <Footer />
    </View>
  );
}
