import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Photo() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#40494E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Feather name="heart" size={20} color="#40494E" />
          <Text>Like</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: data.photo }} style={styles.image} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Feather name="plus-circle" size={26} color="#40494E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Feather name="download" size={26} color="#40494E" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
