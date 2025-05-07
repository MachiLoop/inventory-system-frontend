import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";

const GroupedInventoryScreen = () => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const fetchGroupedInventory = async () => {
      try {
        const res = await axios.get(
          "http://your-api-url/api/inventory/grouped-by-category",
          {
            headers: {
              Authorization: `Bearer YOUR_TOKEN`,
            },
          }
        );

        // Add expanded state
        const formatted = res.data.map((group) => ({
          ...group,
          expanded: false,
        }));

        setGroupedData(formatted);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchGroupedInventory();
  }, []);

  const toggleExpand = (index) => {
    const updated = [...groupedData];
    updated[index].expanded = !updated[index].expanded;
    setGroupedData(updated);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>
        {item.name} - Qty: {item.quantity}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {groupedData.map((group, index) => (
        <View key={group.categoryId || index}>
          <TouchableOpacity
            onPress={() => toggleExpand(index)}
            style={styles.header}
          >
            <Text style={styles.headerText}>{group.category}</Text>
            <Text>{group.expanded ? "▲" : "▼"}</Text>
          </TouchableOpacity>

          {group.expanded && (
            <FlatList
              data={group.items}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
});

export default GroupedInventoryScreen;
