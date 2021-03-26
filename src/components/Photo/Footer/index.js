import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import LazyImage from "../../LazyImage";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Footer({ data }) {
  const small = data.user.profile_image.small;
  const large = data.user.profile_image.large;
  const username = data.user.username;
  return (
    <View style={styles.footer}>
      <View style={styles.profile}>
        <LazyImage
          small={small}
          source={large}
          style={{ width: 35, height: 35 }}
          borderRadius={25}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.buttonGroup}>
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
