import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import React from "react";

const MapViewComponent = ({
  distance,
  region,
  coordinatesA,
  coordinatesB,
  curLocMarkerTitle,
  destLocMarkerTitle,
}) => {
  return (
    <>
      {coordinatesA && coordinatesB && (
        <Text className="absolute top-4 left-2 z-50 font-pmedium text-lg">
          Distance: {distance.toFixed(2)}km
        </Text>
      )}
      <MapView
        // style={{ flex: 1 }}
        region={region}
        paddingAdjustmentBehavior="automatic"
        style={StyleSheet.absoluteFillObject}
      >
        {coordinatesA && (
          <Marker coordinate={coordinatesA} title={curLocMarkerTitle} />
        )}
        {coordinatesB && (
          <Marker coordinate={coordinatesB} title={destLocMarkerTitle} />
        )}
        {coordinatesA && coordinatesB && (
          <Polyline
            coordinates={[coordinatesA, coordinatesB]}
            strokeColor="blue"
            strokeWidth={3}
          />
        )}
      </MapView>
    </>
  );
};

export default MapViewComponent;
