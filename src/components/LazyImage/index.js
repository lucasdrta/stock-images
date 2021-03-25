import React from "react";
import { ImageBackground, Image } from "react-native";

export default function index({ source, small, style }) {
  return (
    <ImageBackground
      source={{ uri: small }}
      resizeMode="cover"
      style={style}
      blurRadius={3}
    >
      <Image source={{ uri: source }} resizeMode="cover" style={style} />
    </ImageBackground>
  );
}
