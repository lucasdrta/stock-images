import React from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import Header from "../../components/Photo/Header";
import Footer from "../../components/Photo/Footer";
import PinchableBox from "../../components/PinchableBox";

export default function Photo() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.imageContainer}>
        <PinchableBox imageUri={data.urls.full} />
      </View>

      <Footer id={data.id} />
    </View>
  );
}
