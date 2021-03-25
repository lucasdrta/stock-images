import React, { useState, useEffect } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Header from "../../components/Header";
import Categories from "../../components/Categories";

export default function Feed() {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  function navigateToPhoto(data) {
    navigation.navigate("Photo", { data });
  }

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=7wQgLl4lMGkFavxqwAWHoGj2CQmlWY8JoCyhBadnxlc"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Categories />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          renderItem={({ item: data }) => (
            <TouchableOpacity
              style={styles.photoButton}
              onPress={() => navigateToPhoto(data)}
            >
              <Image source={{ uri: data.urls.thumb }} style={styles.photo} />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
