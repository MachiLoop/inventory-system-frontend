import { View, Text, Image } from "react-native";
import { icons } from "../constants";
import React from "react";

const ModalContent = ({ title, value }) => {
  return (
    <View className="flex-row w-full">
      <Text className=" w-2/5 font-psemibold text-left">{title}</Text>
      <View className="w-1/5">
        <Image
          source={icons.rightArrow}
          className="w-6 h-6 self-center"
          tintColor="green"
        />
      </View>
      <Text className=" w-2/5 text-right text-primary-900 font-psemibold">
        {value}
      </Text>
    </View>
  );
};

export default ModalContent;
