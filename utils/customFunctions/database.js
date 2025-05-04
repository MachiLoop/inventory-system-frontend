import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const base_url = "http://192.168.99.20:8080";

export const loginUser = async (email, password) => {
  let response;

  try {
    response = await axios.post(`${base_url}/auth/login`, {
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
    response = await axios.post(`${base_url}/trip/book`, tripData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const getCategories = async () => {
  const token = await AsyncStorage.getItem("authToken");

  let response;

  try {
    response = await axios.get(`${base_url}/category/fetch-categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    return response;
  } catch (error) {
    return error.response;
  }
};
