import { useEffect, useState } from "react";
import locations from "../../data/locations";
import { getCoordinates } from "../customFunctions/getCoordinates";
import { calculateDistance } from "../customFunctions/calculateDistance";
import { calculatePrice } from "../customFunctions/calculatePrice";

const useMap = (currentLocation, destinationLocation) => {
  const [coordinatesA, setCoordinatesA] = useState(null);
  const [coordinatesB, setCoordinatesB] = useState(null);
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [region, setRegion] = useState({
    latitude: 7.4433, // Default center (University of Ibadan)
    longitude: 3.9003,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  //find label of the currentlocaion and selected location
  const currentLocationName =
    locations.find((loc) => loc.value == currentLocation)?.name || null;
  const destinationLocationName =
    locations.find((loc) => loc.value == destinationLocation)?.name || null;

  const curLocMarkerTitle = locations.find(
    (loc) => loc.value == currentLocation
  )?.label;

  const destLocMarkerTitle = locations.find(
    (loc) => loc.value == destinationLocation
  )?.label;

  useEffect(() => {
    const fetchData = async () => {
      console.log(currentLocationName, destinationLocationName);
      const coordA = await getCoordinates(currentLocationName);
      const coordB = await getCoordinates(destinationLocationName); // Replace with actual place name
      setCoordinatesA(coordA);
      setCoordinatesB(coordB);

      if (coordA && coordB) {
        const dist = calculateDistance(
          coordA.latitude,
          coordA.longitude,
          coordB.latitude,
          coordB.longitude
        );
        const price = calculatePrice(dist);
        console.log("distance: " + distance);
        console.log("price: " + price);
        setDistance(dist);
        setPrice(price);

        // Calculate center point
        const midLat = (coordA.latitude + coordB.latitude) / 2;
        const midLon = (coordA.longitude + coordB.longitude) / 2;

        // Adjust zoom based on distance
        const newLatitudeDelta = Math.min(Math.max(dist / 50, 0.005), 0.1);
        const newLongitudeDelta = newLatitudeDelta * (16 / 9); // Aspect ratio adjustment

        setRegion({
          latitude: midLat,
          longitude: midLon,
          latitudeDelta: newLatitudeDelta,
          longitudeDelta: newLongitudeDelta,
        });
      }
    };

    if (currentLocation && destinationLocation) {
      fetchData();
    }
  }, [currentLocation, destinationLocation]);

  return {
    distance,
    price,
    setDistance,
    coordinatesA,
    coordinatesB,
    setCoordinatesA,
    setCoordinatesB,
    region,
    curLocMarkerTitle,
    destLocMarkerTitle,
  };
};

export default useMap;
