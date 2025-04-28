import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import locations from "../data/locations";
import { icons } from "../constants";

const DropdownComponent = ({ value, setValue, label, placeholder }) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={locations}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // valueField="label"
        autoScroll={false}
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          // setValue(item.label);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Image
            source={icons.mapFilled}
            style={styles.icon}
            className="w-5 h-5"
            tintColor={isFocus ? "#E23859" : "#08B783"}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    paddingBlock: 14,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#5A5A5A",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#5A5A5A",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#414141",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
