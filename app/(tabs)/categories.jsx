import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { images, icons } from "../../constants";
import React, { useState } from "react";
import TextInputForm from "../../components/TextInputForm";
import CustomButton from "../../components/customButton";

const categories = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <View className="px-4 bg-white flex-1">
      <View className="mb-4">
        <TextInputForm
          title="Search"
          value={searchTerm}
          handleChangeText={(e) => {
            setSearchTerm(e);
            // errors && setErrors({ ...errors, password: null });
          }}
          placeholder="search a category..."
          labelStyles="font-psemibold"
          inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-4 flex-1"
          containerStyles="w-full h-20"
          inputFieldStyles="flex-1 "
        />
      </View>

      <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
        <View className="flex-row justify-between items-center border-neutral-500 mb-4 p-2 ">
          <View className="flex-row items-center gap-2">
            <Image source={images.cards} className="w-16 h-16" />
            <Text>Food and Beverages</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity className="bg-bgBlue px-4 rounded-full">
              <Text className="text-xl text-contentBlue">view</Text>
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
      </ScrollView>
      <CustomButton
        label="Add new category"
        containerStyles="bg-contentBlue py-4 rounded-md mb-8"
        textStyles="text-center text-shadeWhite font-pmedium"
        onPressHandler={() => router.push("/categories")}
      />
    </View>
  );
};

export default categories;

const styles = StyleSheet.create({});
