import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import TextInputForm from "./TextInputForm";

const ProductFormModal = ({
  visible,
  onClose,
  handleFormSubmit,
  editingProduct,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    weight: "",
    color: "",
    quantity: "",
    price: "",
    category: "",
    imageUrl: "",
    lowStockThreshold: "",
  });

  useEffect(() => {
    if (editingProduct) {
      console.log(editingProduct);
      setFormData({
        name: editingProduct.name || "",
        description: editingProduct.description || "",
        weight: editingProduct.weight || "",
        color: editingProduct.color || "",
        quantity: editingProduct.quantity || "",
        price: editingProduct.price || "",
        imageUrl: editingProduct.imageUrl || "",
        lowStockThreshold: editingProduct.lowStockThreshold || "",
      });
    } else {
      setFormData({
        name: "",
        description: "",
        weight: "",
        color: "",
        quantity: "",
        price: "",
        imageUrl: "",
        lowStockThreshold: "",
      });
    }
  }, [editingProduct]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) return;
    handleFormSubmit(formData);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      // style={{ maxHeight: 100 }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text className="text-center text-2xl mb-4 font-psemibold">
            {editingProduct ? "Edit" : "Add"} Product
          </Text>

          <ScrollView
            className="gap-4"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            <TextInputForm
              label="Product Name"
              title="name"
              value={formData.name}
              handleChangeText={(val) => handleChange("name", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1"
            />
            <TextInputForm
              label="Description"
              title="description"
              value={formData.description}
              handleChangeText={(val) => handleChange("description", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1"
            />
            <TextInputForm
              label="Weight in kg(optional)"
              title="weight"
              value={String(formData.weight)}
              handleChangeText={(val) => handleChange("weight", val)}
              placeholder="e.g 0.5, 1, 2,..."
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label="Color(optional)"
              title="color"
              value={formData.color}
              handleChangeText={(val) => handleChange("color", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label={`Quantity(Current: ${
                editingProduct ? editingProduct.quantity : 0
              })`}
              title="quantity"
              value={String(formData.quantity)}
              handleChangeText={(val) => handleChange("quantity", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label="Price"
              title="price"
              value={String(formData.price)}
              handleChangeText={(val) => handleChange("price", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label="Category"
              title="category"
              value={String(formData.category)}
              handleChangeText={(val) => handleChange("category", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label="Image Url"
              title="imageUrl"
              value={formData.imageUrl}
              handleChangeText={(val) => handleChange("imageurl", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
            <TextInputForm
              label="Low stock threshold"
              title="low stock threshold"
              value={String(formData.lowStockThreshold)}
              handleChangeText={(val) => handleChange("lowStockThreshold", val)}
              placeholder=""
              labelStyles="font-regular"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-1 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
          </ScrollView>

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
    // maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContentWrapper: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "white",
    // borderRadius: 10,
    // alignItems: "center",
  },
});

export default ProductFormModal;
