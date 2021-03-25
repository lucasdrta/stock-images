import React from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import Header from "../../components/Photo/Header";
import Footer from "../../components/Photo/Footer";
import LazyImage from "../../components/LazyImage";

export default function Photo() {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.imageContainer}>
        <LazyImage
          small={data.urls.thumb}
          source={data.urls.regular}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 20,
          }}
        />
      </View>

      <Footer id={data.id} />
    </View>
  );
}
