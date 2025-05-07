import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputForm from "../components/TextInputForm";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import CustomButton from "../components/customButton";
// import { useWindowDimensions } from "react-native";
import { loginUser } from "../utils/customFunctions/database";
import useToastNotification from "../utils/customHooks/useToastNotification";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);

  const showToast = useToastNotification();
  const router = useRouter();

  const handleLogin = async () => {
    // console.log("hello");
    if (!form.email || !form.password) {
      showToast("All fields are required", "danger");
      return;
    }

    const response = await loginUser(form.email, form.password);

    // console.log(response.status);
    if (response.status == 400 || response.status == 401) {
      if (response.data.errors) {
        // console.log("hello");
        setErrors(() => {
          return response.data.errors.reduce((acc, { field, message }) => {
            if (!acc[field]) {
              acc[field] = message; // Only assign if it hasn't been set yet
            }
            return acc;
          }, {});
        });
      } else {
        showToast(response.data.message, "danger");
      }
    } else if ((response.status = 200)) {
      const authToken = await AsyncStorage.getItem("authToken");
      // console.log("Retrieved token:", authToken);
      showToast("Login successful", "success");
      router.replace("/products");
    }
  };
  // console.log(width, height);

  return (
    <SafeAreaView className="px-4 flex-1 pt-12 justify-between bg-white">
      <View>
        <View className="gap-1">
          <Text className="text-3xl">Sign In Account</Text>
          <Text className="text-neutral-700">
            Please login with registered account
          </Text>
        </View>
        <View className="mt-10 gap-6">
          <View>
            <TextInputForm
              title="Email"
              label="Email"
              value={form.email}
              handleChangeText={(e) => {
                setForm({ ...form, email: e });
                errors && setErrors({ ...errors, email: null });
              }}
              placeholder="Enter your email"
              labelStyles="font-psemibold"
              inputContainerStyles="border-2 border-neutral-200 rounded-md flex-row items-center justify-between px-2"
              inputFieldStyles="flex-1"
            />
            {errors?.email && (
              <Text className="text-red-500">{errors.email}</Text>
            )}
          </View>
          <View>
            <TextInputForm
              title="Password"
              label="Password"
              value={form.password}
              handleChangeText={(e) => {
                setForm({ ...form, password: e });
                errors && setErrors({ ...errors, password: null });
              }}
              placeholder="Enter your password"
              labelStyles="font-psemibold"
              inputContainerStyles="border-2 border-neutral-200 rounded-md flex-row items-center justify-between px-2"
              inputFieldStyles="flex-1"
            />
            {errors?.password && (
              <Text className="text-red-500">{errors.password}</Text>
            )}
          </View>
        </View>
        <CustomButton
          label="Sign in"
          containerStyles="bg-primary-700 py-4 rounded-md mt-4"
          textStyles="text-center text-shadeWhite font-pmedium"
          onPressHandler={handleLogin}
          // onPressHandler={() => router.push("/products")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
