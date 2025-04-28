import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ModalCard = ({ children }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContentWrapper} className="gap-6">
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContentWrapper: {
    width: "95%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default ModalCard;
