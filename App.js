import React from "react";
import { StatusBar } from "react-native";
import App from "./src";
import { ImageProvider } from "./src/contexts/ImageContext";

export default function Main() {
  return (
    <ImageProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <App />
    </ImageProvider>
  );
}
