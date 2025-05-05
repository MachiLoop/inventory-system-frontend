import React, { useState, useEffect } from "react";
import { Modal, View, TextInput, Button, Text, StyleSheet } from "react-native";
import TextInputForm from "./TextInputForm";

const CategoryFormModal = ({
  visible,
  onClose,
  handleFormSubmit,
  editingCategory,
}) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name || "");
      setImageUrl(editingCategory.imageUrl || "");
    } else {
      setName("");
      setImageUrl("");
    }
  }, [editingCategory]);

  const handleSubmit = () => {
    if (!name.trim() || !imageUrl.trim()) return;
    handleFormSubmit({ name, imageUrl });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View className="w-11/12 bg-white p-4 rounded-xl">
          <Text className="text-center text-2xl mb-4 font-psemibold">
            {editingCategory ? "Edit" : "Add"} Category
          </Text>
          {/* <TextInput
            placeholder="Category Name"
            value={name}
            onChangeText={setName}
          /> */}
          <View className="gap-4">
            <TextInputForm
              label="Category Name"
              title="name"
              value={name}
              handleChangeText={setName}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-2 flex-1"
              containerStyles="w-full h-24"
              inputFieldStyles="flex-1"
            />
            <TextInputForm
              label="Image Url"
              title="imageUrl"
              value={imageUrl}
              handleChangeText={setImageUrl}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-4 flex-1"
              containerStyles="w-full h-24"
              inputFieldStyles="flex-1 "
            />
          </View>

          <View className="mt-4 gap-2">
            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Cancel" onPress={onClose} color="red" />
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

export default CategoryFormModal;
