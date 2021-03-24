import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Header from "../../components/Header";
import Categories from "../../components/Categories";

export default function Feed() {
  const data = [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1616497614334-2450b857d6a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    },
    {
      id: 2,
      photo:
        "https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    },
    {
      id: 3,
      photo:
        "https://images.unsplash.com/photo-1616505107420-4b2ac8df166e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 4,
      photo:
        "https://images.unsplash.com/photo-1616266327225-3ef6938bfb71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 5,
      photo:
        "https://images.unsplash.com/photo-1599839352992-ff49ac7bbb6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 6,
      photo:
        "https://images.unsplash.com/photo-1604261605115-4b34b646a05c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 7,
      photo:
        "https://images.unsplash.com/photo-1584761696377-008e22a7fb15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 8,
      photo:
        "https://images.unsplash.com/photo-1616094064188-dbd04c6e7e25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
    },
    {
      id: 9,
      photo:
        "https://images.unsplash.com/photo-1608235375712-be654ace4420?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    },
    {
      id: 10,
      photo:
        "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 11,
      photo:
        "https://images.unsplash.com/photo-1583932692875-a42450d50acf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 12,
      photo:
        "https://images.unsplash.com/photo-1616231708825-2fbe9f5f1438?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
  ];

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
            <TouchableOpacity style={styles.photoButton}>
              <Image source={{ uri: data.photo }} style={styles.photo} />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
