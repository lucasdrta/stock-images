import React, { useState } from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Header() {
  const [hasLiked, setHasLiked] = useState(false);
  const navigation = useNavigation();

  function likePhoto() {
    setHasLiked(!hasLiked);
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#40494E" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeButton} onPress={() => likePhoto()}>
        {hasLiked === true ? (
          <FontAwesome name="heart" size={20} color="#DE6549" />
        ) : (
          <Feather name="heart" size={20} color="#40494E" />
        )}
        <Text>{hasLiked === true ? "Liked" : "Like"}</Text>
      </TouchableOpacity>
    </View>
  );
}
