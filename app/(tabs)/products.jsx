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
import { images, icons } from "../../constants";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import TextInputForm from "../../components/TextInputForm";
import CustomButton from "../../components/customButton";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../../utils/customFunctions/database";
import ProductItemCard from "../../components/productItemCard";
import { useFocusEffect } from "expo-router";
import ProductFormModal from "../../components/productFormModal";
import DeleteModal from "../../components/deleteModal";
import useToastNotification from "../../utils/customHooks/useToastNotification";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupedProducts, setGroupedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const router = useRouter();
  const showToast = useToastNotification();

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getProducts();

    // console.log(response.data);
    // console.log(response.status);

    // console.log("data: " + response.data.categories[1].name);

    if ((response.status = 200)) {
      console.log("200");
      const formatted = response.data.map((group) => ({
        ...group,
        expanded: false,
      }));
      setGroupedProducts(formatted);
      console.log(groupedProducts);
    } else {
      showToast(response.data.message || "Failed to fetch products", "danger");
    }
    setLoading(false);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setModalVisible(true);
  };

  const handleFormSubmit = async (data) => {
    console.log(data);
    if (!data.imageUrl) {
      ({ imageUrl, ...data } = data);
    }
    if (!data.lowStockThreshold) {
      delete data.lowStockThreshold;
      // ({ lowStockThreshold, ...data } = data);
    }
    if (!data.description) {
      delete data.description;
      // ({ description, ...data } = data);
    }
    try {
      if (editingProduct) {
        // console.log(data);
        const response = await editProduct(data, editingProduct._id);

        //TODO: handle response statusCodes
      } else {
        //post the product
        const response = await addProduct(data);
        // console.log("response.data" + response.data);

        //TODO: handle response statusCodes
      }
      await fetchProducts();
      setModalVisible(false);
    } catch (err) {
      console.error("submit error: ", err.message);
    }
  };

  const handleEditProduct = (product) => {
    console.log("product" + product);
    setEditingProduct(product);
    setModalVisible(true);
  };

  const handleDeleteProduct = (product) => {
    setDeletingProduct(product);
    setDeleteModalVisible(true);
  };

  const deleteProductHandler = async () => {
    setDeleteModalVisible(false);
    const response = await deleteProduct(deletingProduct._id);

    if (response.status === 200) {
      console.log("successful");
      await fetchProducts();
      showToast(response.data.message, "success");
    } else {
      showToast(response.data.message || "Failed to delete product", "danger");
    }

    setDeletingProduct(null);
  };

  // useEffect(() => {
  //   fetchTrips();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      fetchProducts(); // 👈 your existing function to fetch all trips
    }, [])
  );

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const toggleExpand = (index) => {
    const updated = [...groupedProducts];
    updated[index].expanded = !updated[index].expanded;
    setGroupedProducts(updated);
  };

  const renderProduct = ({ item }) => (
    <ProductItemCard
      item={item}
      handleEditProduct={handleEditProduct}
      handleDeleteProduct={handleDeleteProduct}
    />
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
              placeholder="search a product..."
              labelStyles="font-psemibold"
              inputContainerStyles="bg-gray-100 rounded-md flex-row items-center justify-between px-4 mt-4 flex-1"
              containerStyles="w-full h-20"
              inputFieldStyles="flex-1 "
            />
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 16 }}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {groupedProducts.map((group, index) => (
              <View key={group.categoryId || index} className="mb-2">
                <TouchableOpacity
                  onPress={() => toggleExpand(index)}
                  className="flex flex-row bg-gray-50 rounded-md p-3 justify-between items-center mb-3"
                >
                  <Text className="text-lg capitalize flex-1 font-psemibold">
                    {group.category}
                  </Text>
                  {/* <Text>{group.expanded ? "▲" : "▼"}</Text> */}
                  {group.expanded ? (
                    <Image source={icons.upCaret} className="w-4 h-4" />
                  ) : (
                    <Image source={icons.downCaret} className="w-4 h-4" />
                  )}
                </TouchableOpacity>

                {group.expanded && (
                  <FlatList
                    data={group.products}
                    keyExtractor={(item) => item._id}
                    renderItem={renderProduct}
                    scrollEnabled={false}
                    numColumns={2}
                    columnWrapperStyle={{
                      justifyContent: "space-between",
                      // gap: 2,
                    }}
                  />
                )}
              </View>
            ))}
          </ScrollView>

          <CustomButton
            label="Add new product"
            containerStyles="bg-contentBlue py-4 rounded-md mb-8"
            textStyles="text-center text-shadeWhite font-pmedium"
            onPressHandler={handleAddProduct}
          />
          {/* <View style={{ maxHeight: "100%" }}> */}
          <ProductFormModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            handleFormSubmit={handleFormSubmit}
            editingProduct={editingProduct}
          />
          <DeleteModal
            visible={deleteModalVisible}
            onClose={() => setDeleteModalVisible(false)}
            itemType="Product"
            deleteHandler={deleteProductHandler}
          />
          {/* </View> */}
        </View>
      )}
    </>
  );
};

export default Product;

const styles = StyleSheet.create({});
