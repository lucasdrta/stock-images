import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import { ImageContext } from "../../contexts/ImageContext";
import LazyImage from "../../components/LazyImage";
import styles from "./styles";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();
  const data = [];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="#40494E" />
        </TouchableOpacity>
      </View>
      <View style={styles.formConatiner}>
        <View style={styles.form}>
          <Feather
            name="search"
            size={24}
            color="black"
            size={20}
            color="#DADADA"
            style={{ padding: 10 }}
          />

          <TextInput
            style={styles.input}
            placeholder="Search image"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
      </View>
      {data.length > 1 ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            onEndReachedThreshold={0.3}
            contentContainerStyle={{}}
            renderItem={({ item: data }) => (
              <TouchableOpacity style={styles.photoButton}>
                <LazyImage
                  source={data.urls.regular}
                  small={data.urls.thumb}
                  style={{ width: "100%", height: 200 }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.anything}>
          <View style={styles.lottie}>
            <LottieView
              source={require("../../../assets/search.json")}
              autoPlay
              loop
            />
          </View>
        </View>
      )}
    </>
  );
}
