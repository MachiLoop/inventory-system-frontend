import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";

const TextInputForm = ({
  title,
  containerStyles,
  label,
  placeholder,
  value,
  handleChangeText,
  labelStyles,
  inputContainerStyles,
  inputFieldStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={containerStyles ? containerStyles : null}>
      {label && <Text className={labelStyles}>{label}</Text>}
      <View className={inputContainerStyles}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          keyboardType={title === "Email" ? "email-address" : null}
          secureTextEntry={title === "Password" && !showPassword}
          className={inputFieldStyles}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {title === "Search" && (
          <TouchableOpacity>
            <Image
              source={icons.search}
              tintColor="black"
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputForm;
