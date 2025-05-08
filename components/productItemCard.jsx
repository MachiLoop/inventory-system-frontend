import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { icons, images } from "../constants";
import React from "react";

const ProductItemCard = ({ item, handleEditProduct }) => {
  return (
    <View
      style={styles.productCard}
      className=" mb-4 border-2 border-gray-100 pb-2 justify-between rounded-xl
      "
    >
      <View className="mb-1">
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.logo}
          resizeMode="cover"
        />
        <View className="px-2">
          <Text className="capitalize font-psemibold">{item.name}</Text>
          <View className="mb-2">
            <Text>Qty: {item.quantity}</Text>
            {item.weight && <Text>Weight: {item.weight}</Text>}
            {item.color && <Text>Color: {item.color}</Text>}
          </View>
          <Text className="font-psemibold">N{item.price}.00</Text>
        </View>
      </View>
      <View className="flex-row justify-center gap-6 items-center">
        <TouchableOpacity>
          <Image
            source={icons.deleteIcon}
            className="w-4 h-4"
            tintColor="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditProduct(item)}>
          <Image source={icons.edit} className="w-4 h-4" tintColor="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
  },
  productCard: {
    width: "48%",
  },
});

export default ProductItemCard;
