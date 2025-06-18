import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const DeleteModal = ({ visible, onClose, itemType, deleteHandler }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View className="w-11/12 bg-white px-4 py-8 rounded-xl">
          <Text className="font-psemibold text-center text-2xl mb-4">
            Confirm Deletion
          </Text>
          <Text className="text-center text-lg">
            Are you sure you want to delete this {itemType}?
          </Text>
          <View className="gap-6 mt-4 flex-row justify-center">
            <TouchableOpacity
              className="bg-red-500 px-4 py-2 rounded-md"
              onPress={deleteHandler}
            >
              <Text className="text-lg font-psemibold">Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-400 px-4 py-2 rounded-md"
              onPress={onClose}
            >
              <Text className="text-lg font-psemibold">No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
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

export default DeleteModal;
