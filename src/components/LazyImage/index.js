import React from "react";
import { ImageBackground, Image } from "react-native";

export default function index({ source, small, style, borderRadius }) {
  return (
    <ImageBackground
      source={{ uri: small }}
      resizeMode="cover"
      style={style}
      borderRadius={borderRadius}
      blurRadius={3}
    >
      <Image
        source={{ uri: source }}
        resizeMode="cover"
        style={style}
        borderRadius={borderRadius}
      />
    </ImageBackground>
  );
}
