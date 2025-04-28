import { View, Text } from "react-native";
import React from "react";

const MapText = ({ coordinate }) => {
  return (
    <View
      style={{
        position: "absolute",
        left: coordinate.longitude, // Adjust for position
        top: coordinate.latitude, // Adjust for position
        backgroundColor: "white",
        padding: 4,
        borderRadius: 4,
      }}
    >
      <Text>hello</Text>
    </View>
  );
};

export default MapText;
