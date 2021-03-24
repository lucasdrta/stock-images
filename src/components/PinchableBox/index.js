import React from "react";
import { Animated, Dimensions } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

const screen = Dimensions.get("window");

export default function PinchableBox({ imageUri }) {
  let scale = new Animated.Value(1);

  let onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={onPinchStateChange}
    >
      <Animated.Image
        source={{ uri: imageUri }}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 20,
          transform: [{ scale: scale }],
        }}
        resizeMode="cover"
      />
    </PinchGestureHandler>
  );
}
