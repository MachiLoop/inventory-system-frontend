import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  label,
  containerStyles,
  textStyles,
  onPressHandler,
}) => {
  return (
    <TouchableOpacity className={containerStyles} onPress={onPressHandler}>
      <Text className={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
