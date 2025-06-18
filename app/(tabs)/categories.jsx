import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext } from "react";
import { images, icons } from "../../constants";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import TextInputForm from "../../components/TextInputForm";
import CustomButton from "../../components/customButton";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from "../../utils/customFunctions/database";
import ItemCard from "../../components/itemCard";
import { useFocusEffect } from "expo-router";
import CategoryFormModal from "../../components/categoryFormModal";
import { AppContext } from "../../context/AppContexts";
import DeleteModal from "../../components/deleteModal";
import useToastNotification from "../../utils/customHooks/useToastNotification";

const Categories = () => {
  const showToast = useToastNotification();
  const [searchTerm, setSearchTerm] = useState("");
  // const [categories, setCategories] = useState([]);
  const {
    categories,
    setCategories,
    loadingCategories,
    setLoadingCategories,
    fetchCategories,
  } = useContext(AppContext);
  // const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deletingCategory, setDeletingCategory] = useState(null);

  console.log(categories);

  const router = useRouter();

  const handleAddCategory = () => {
    setEditingCategory(null);
    setModalVisible(true);
  };

  const handleFormSubmit = async (dataReceived) => {
    //TOFIX
    const data = dataReceived.imageUrl
      ? { name: dataReceived.name, imageUrl: dataReceived.imageUrl }
      : { name: dataReceived.name };
    try {
      if (editingCategory) {
        console.log(data);
        const response = await editCategory(data, editingCategory._id);

        //TODO: handle response statusCodes
      } else {
        //post the category
        const response = await addCategory(data);
        // console.log("response.data" + response.data);

        //TODO: handle response statusCodes
      }
      await fetchCategories();
      setModalVisible(false);
    } catch (err) {
      console.error("submit error: ", err.message);
    }
  };

  const handleEditCategory = (category) => {
    // console.log(category);
    setEditingCategory(category);
    setModalVisible(true);
  };

  const handleDeleteCategory = (category) => {
    setDeletingCategory(category);
    setDeleteModalVisible(true);
  };

  const deleteCategoryHandler = async () => {
    const response = await deleteCategory(deletingCategory._id);

    // console.log(response.data);
    // console.log(response.status);

    // console.log("data: " + response.data.categories[1].name);

    if (response.status == 200) {
      console.log("successful");
      await fetchCategories();
      showToast(response.data.message, "success");
    } else {
      showToast(response.data.message || "Failed to delete category", "danger");
    }
    setDeleteModalVisible(false);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCategory = ({ item }) => (
    <ItemCard
      item={item}
      handleEditCategory={handleEditCategory}
      handleDeleteCategory={handleDeleteCategory}
    />
  );

  return (
    <>
      {loadingCategories ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View className="px-4 bg-white flex-1">
          <View className="mb-4">
            <TextInputForm
              title="Search"
              value={searchTerm}
              handleChangeText={(e) => {
                setSearchTerm(e);
                // errors && setErrors({ ...errors, password: null });
              }}
              placeholder="search a category..."
              labelStyles="font-psemibold"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-4 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
          </View>

          {filteredCategories.length > 0 ? (
            <FlatList
              data={filteredCategories}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item._id}
              renderItem={renderCategory}
              contentContainerStyle={{ marginTop: 16 }}
            />
          ) : (
            <Text className="flex-1 mt-8">No category found</Text>
          )}

          <CustomButton
            label="Add new category"
            containerStyles="bg-contentBlue py-4 rounded-md mb-8"
            textStyles="text-center text-shadeWhite font-pmedium"
            onPressHandler={handleAddCategory}
          />
          <CategoryFormModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            handleFormSubmit={handleFormSubmit}
            editingCategory={editingCategory}
          />
          <DeleteModal
            visible={deleteModalVisible}
            onClose={() => setDeleteModalVisible(false)}
            itemType="category"
            deleteHandler={deleteCategoryHandler}
          />
        </View>
      )}
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({});
