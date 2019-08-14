import React from "react";
import { Platform } from "react-native";
import { Picker } from "native-base";

const Item = Picker.Item;
const isPlatformIOS = Platform.OS === "ios" ? true : false;

export const Dropdown = ({
  selectedValue,
  onValueChange,
  items,
  labelKey,
  valueKey
}) => {
  console.log(selectedValue, onValueChange, items, labelKey, valueKey);
  const transformedItems = items.map((item, index) => {
    if (isPlatformIOS && index == 0)
      return index == 0 ? { ...item, [labelKey]: `${item[labelKey]} ▼` } : item;
    else return item;
  });
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      mode="dropdown"
    >
      {transformedItems.map(item => (
        <Item
          label={item[labelKey]}
          value={item[valueKey]}
          key={item[valueKey]}
        />
      ))}
    </Picker>
  );
};
