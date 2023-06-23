import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Navbar = ({ title, iconName }) => {
  return (
    <View className=" w-full h-[70px] bg-primary flex px-5 justify-center">
      <View className="flex flex-row gap-1 items-center">
        <Text className="text-white text-[19px] font-medium tracking-wide">
          {title}
        </Text>
        {iconName && (
          <MaterialCommunityIcons name={iconName} color="white" size={25} />
        )}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
