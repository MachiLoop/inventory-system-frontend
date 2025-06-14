import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { icons, images } from "../constants";
import React from "react";

// const placeholderImage =
//   "https://media.istockphoto.com/id/1360261804/vector/no-image-photo-template-on-gray-background.jpg?s=612x612&w=0&k=20&c=jR8gH9OmiRzSKZ3bIXsVfh161iuOrjfhqDpHTlTRFr4=";

const ItemCard = ({ item, handleEditCategory }) => {
  return (
    <View className="flex-row justify-between items-center bg-gray-50 mb-4 p-2 gap-4 rounded-lg mx-2">
      <View className=" gap-2 flex-1">
        <Image source={{ uri: item.imageUrl }} style={styles.logo} />
        <Text className="capitalize text-base font-psemibold">{item.name}</Text>
      </View>
      <View className="flex-row gap-4 items-center">
        <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
          <Text className="text-lg text-contentBlue">view</Text>
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
