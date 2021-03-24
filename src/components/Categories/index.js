import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";
export default function Categories() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
        contentContainerStyle={styles.categoryContainerStyle}
      >
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Wallpaper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Nature</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Archtecture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Business & Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Film</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.categoryItemText}>Travel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
