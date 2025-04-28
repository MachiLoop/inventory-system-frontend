import { View, Text, Image } from "react-native";
import { icons } from "../constants";
import React from "react";

const BookingCard = ({ origin, destination, date, price }) => {
  return (
    <View className="border border-neutral-100 rounded-md  bg-white ">
      <View className="px-4">
        <View className="pt-3">
          <View className="flex-row gap-2 items-center">
            <Image
              source={icons.mapFilled}
              className="w-4 h-4"
              tintColor="green"
            />
            <Text className="font-pmedium text-lg">{origin}</Text>
          </View>
          <View className="border-l ml-2 pl-4 pb-4 pt-0.5">
            <Text>Origin</Text>
            <Text className="font-psemibold">{date}</Text>
          </View>
        </View>
        <View>
          <View className="flex-row gap-2 items-center">
            <Image
              source={icons.mapFilled}
              className="w-4 h-4"
              tintColor="red"
            />
            <Text className="font-pmedium text-lg">{destination}</Text>
          </View>
          <Text className="pl-6 pt-0.5">Destination</Text>
        </View>
      </View>
      <View className="border-t border-neutral-100 justify-between flex-row items-center py-2 px-4 mt-3">
        <View className="flex-row gap-2">
          <Image source={icons.discount} className="w-5 h-5" />
          <Text className="font-psemibold">{price}</Text>
        </View>
        <View className="flex-row gap-1">
          <Text className="text-primary-300 font-psemibold">Completed</Text>
          <Image source={icons.rightCaret} className="w-6 h-6" />
        </View>
      </View>
    </View>
  );
};

export default BookingCard;
