import React, { useContext } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageContext } from "../../contexts/ImageContext";

import styles from "./styles";
import Header from "../../components/Header";
import LazyImage from "../../components/LazyImage";
import Categories from "../../components/Categories";

export default function Feed() {
  const { data, loadApiData, loading, refreshiList, refreshing } = useContext(
    ImageContext
  );
  const navigation = useNavigation();

  function navigateToPhoto(data) {
    navigation.navigate("Photo", { data });
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Categories />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          onEndReached={async () => await loadApiData()}
          onEndReachedThreshold={0.1}
          onRefresh={refreshiList}
          refreshing={refreshing}
          ListFooterComponent={
            loading && <ActivityIndicator size="small" color="#999" />
          }
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          renderItem={({ item: data }) => (
            <TouchableOpacity
              style={styles.photoButton}
              onPress={() => navigateToPhoto(data)}
            >
              <LazyImage
                source={data.urls.regular}
                small={data.urls.thumb}
                style={{ width: "100%", height: 200 }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
