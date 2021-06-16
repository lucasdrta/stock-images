import React from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { Video } from "expo-av";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const { height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const video = React.useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        source={require("../../../assets/1.mp4")}
        style={[styles.video, { height: height }]}
        rate={1}
        muted
        shouldPlay
        isLooping
        volume={1}
        resizeMode="cover"
      />

      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <View>
            <Image
              source={require("../../../assets/logo.png")}
              style={{ width: 75, height: 75 }}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#3b5998" }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              source={require("../../../assets/facebook.png")}
              style={styles.icon}
            />
            <Text style={{ color: "#fff" }}>Entre com o Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              source={require("../../../assets/google.png")}
              style={styles.icon}
            />
            <Text style={{ color: "#000" }}>Entre com o Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#000" }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              source={require("../../../assets/apple.png")}
              style={styles.icon}
            />
            <Text style={{ color: "#fff" }}>Entre com a Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "rgba(0,0,0,0.5)" }]}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={{ color: "rgba(255,255,255,0.5)" }}>
              Entre como convidado
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
