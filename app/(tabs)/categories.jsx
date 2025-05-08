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
  editCategory,
  getCategories,
} from "../../utils/customFunctions/database";
import ItemCard from "../../components/itemCard";
import { useFocusEffect } from "expo-router";
import CategoryFormModal from "../../components/categoryFormModal";
import { AppContext } from "../../context/AppContexts";

const categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [categories, setCategories] = useState([]);
  const { categories, setCategories } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const router = useRouter();

  const fetchCategories = async () => {
    setLoading(true);
    const response = await getCategories();

    // console.log("data: " + response.data.categories[1].name);

    if ((response.status = 201)) {
      setCategories(response.data.categories);
      categories.forEach((category) => {
        console.log(category.name);
      });
    } else {
      showToast(
        response.data.message || "Failed to fetch categories",
        "danger"
      );
    }
    setLoading(false);
  };

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

  // useEffect(() => {
  //   fetchTrips();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      fetchCategories(); // 👈 your existing function to fetch all trips
    }, [])
  );

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCategory = ({ item }) => (
    <ItemCard item={item} handleEditCategory={handleEditCategory} />
  );

  return (
    <>
      {loading ? (
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

          {categories.length > 0 ? (
            <FlatList
              data={filteredCategories}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item._id}
              renderItem={renderCategory}
              contentContainerStyle={{ marginTop: 16 }}
            />
          ) : (
            <Text className="flex-1 mt-8">
              No category found. Click the button below to add a category
            </Text>
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
        </View>
      )}
    </>
  );
};

export default categories;

const styles = StyleSheet.create({});
