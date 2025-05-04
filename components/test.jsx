// screens/CategoryPage.js
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CategoryFormModal from "../components/categoryFormModal";
import api from "../utils/api";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  const handleAddPress = () => {
    setEditingCategory(null);
    setModalVisible(true);
  };

  const handleFormSubmit = async (data) => {
    try {
      if (editingCategory) {
        await api.put(`/categories/${editingCategory._id}`, data);
      } else {
        await api.post("/categories", data);
      }
      await fetchCategories();
      setModalVisible(false);
    } catch (err) {
      console.error("Submit error:", err.message);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setModalVisible(true);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Add Category" onPress={handleAddPress} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleEdit(item)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.imageUrl}</Text>
          </TouchableOpacity>
        )}
      />
      <CategoryFormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleFormSubmit}
        initialData={editingCategory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  name: {
    fontWeight: "bold",
  },
});

export default CategoryPage;
