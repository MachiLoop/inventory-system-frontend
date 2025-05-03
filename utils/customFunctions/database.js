import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = async (email, password) => {
  let response;

  try {
    response = await axios.post("http://192.168.221.20:8080/auth/login", {
      email: email,
      password: password,
    });

    // Save token
    await AsyncStorage.setItem("authToken", response.data.authToken);

    return response;
  } catch (error) {
    return error.response;
  }
};

export const bookTrip = async (tripData) => {
  const token = await AsyncStorage.getItem("authToken");

  let response;

  try {
    response = await axios.post(
      "http://192.168.212.20:8080/trip/book",
      tripData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getCategories = async () => {
  const token = await AsyncStorage.getItem("authToken");

  let response;

  try {
    response = await axios.get(
      "http://192.168.221.20:8080/category/fetch-categories",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);

    return response;
  } catch (error) {
    return error.response;
  }
};
