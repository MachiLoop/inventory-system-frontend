import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = async (fullName, email, password) => {
  let response;
  // console.log("Hi");
  try {
    response = await axios.post("http://192.168.212.20:8080/auth/sign-up", {
      // response = await axios.post("http://localhost:8080/auth/sign-up", {
      fullName: fullName,
      email: email,
      password: password,
    });

    if (!response.ok) {
      console.log(response.status);
    }

    return response;
  } catch (error) {
    // console.log(error.response.data.errors[0].message);
    // console.log(error.response.data);
    return error.response;
  }
};

export const loginUser = async (email, password) => {
  let response;

  try {
    response = await axios.post("http://192.168.212.20:8080/auth/login", {
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

export const getTrips = async () => {
  const token = await AsyncStorage.getItem("authToken");

  let response;

  try {
    response = await axios.get("http://192.168.212.20:8080/trip/bookings", {
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
