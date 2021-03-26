import React, { useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ImageContext } from "../../contexts/ImageContext";

import styles from "./styles";
export default function Categories() {
  const { topics, loadTopicPhotos, loadApiData } = useContext(ImageContext);
  return (
    <ImageContext.Provider>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
          contentContainerStyle={styles.categoryContainerStyle}
        >
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={async () => await loadApiData(1, true)}
          >
            <Text style={styles.categoryItemText}>Editorial</Text>
          </TouchableOpacity>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              style={styles.categoryItem}
              onPress={() => loadTopicPhotos(topic.id)}
            >
              <Text style={styles.categoryItemText}>{topic.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageContext.Provider>
  );
}
