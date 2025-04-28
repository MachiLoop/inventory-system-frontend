import { View, Text, Image } from "react-native";
import { Drawer } from "expo-router/drawer";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Tabs } from "expo-router";
import React from "react";
// import { icons } from "../../constants";

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="products" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Products",
          title: "Products",
        }}
      />
      <Drawer.Screen
        name="categories" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Categories",
          title: "Categories",
        }}
      />
      <Drawer.Screen
        name="notifications" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
