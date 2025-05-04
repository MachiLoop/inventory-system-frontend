import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { icons, images } from "../constants";
import React from "react";

const ItemCard = ({ item, handleEditCategory }) => {
  return (
    <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 gap-4 ">
      <View className="flex-row items-center gap-2 flex-1">
        <Image source={{ uri: item.imageUrl }} style={styles.logo} />
        <Text className="capitalize ">{item.name}</Text>
      </View>
      <View className="flex-row gap-4 items-center">
        <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
          <Text className="text-xl text-contentBlue">view</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEditCategory(item)}>
          <Image source={icons.edit} className="w-6 h-6" tintColor="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icons.deleteIcon}
            className="w-6 h-6"
            tintColor="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
  },
});

export default ItemCard;
