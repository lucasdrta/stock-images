import React, { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ImageContext } from "../../contexts/ImageContext";

import styles from "./styles";
export default function Categories() {
  const {
    topics,
    loadTopicPhotos,
    loadApiData,
    tabName,
    setTabName,
    setTopicId,
  } = useContext(ImageContext);

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
            style={
              tabName === "Editorial"
                ? styles.categoryItemActive
                : styles.categoryItem
            }
            onPress={async () => {
              setTabName("Editorial");
              await loadApiData(1, true);
            }}
          >
            <Text
              style={
                tabName === "Editorial"
                  ? styles.categoryItemTextActive
                  : styles.categoryItemText
              }
            >
              Editorial
            </Text>
          </TouchableOpacity>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              style={
                tabName === topic.title
                  ? styles.categoryItemActive
                  : styles.categoryItem
              }
              onPress={async () => {
                setTabName(topic.title);
                setTopicId(topic.id);
                await loadTopicPhotos(topic.id, 1, true);
              }}
            >
              <Text
                style={
                  tabName === topic.title
                    ? styles.categoryItemTextActive
                    : styles.categoryItemText
                }
              >
                {topic.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageContext.Provider>
  );
}
