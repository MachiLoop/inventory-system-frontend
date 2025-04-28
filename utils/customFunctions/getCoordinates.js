// Function to get coordinates for a location name
import * as Location from "expo-location";

export const getCoordinates = async (locationName) => {
  console.log(locationName);
  if (!locationName) return null;
  try {
    const geocode = await Location.geocodeAsync(locationName);
    console.log(locationName, geocode[0]);
    return geocode[0] || null; // Get the first result (latitude, longitude)
  } catch (error) {
    console.error("Error getting coordinates:", error);
    return null;
  }
};
