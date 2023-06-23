import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";
import Actions from "../components/Actions";

const OrderList = () => {
  const action = useSelector((state) => state.action);
  return (
    <>
      <View className="flex-1 bg-[#f5f5f5]">
        <Navbar title="လက်ရှိအော်ဒါများ" iconName="playlist-plus" />

        <ScrollView className="">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.9}
          className="w-[60px] h-[60px] bg-primary absolute bottom-3 right-3 rounded-md flex
       justify-center items-center"
        >
          <MaterialCommunityIcons name="plus" color="white" size={40} />
        </TouchableOpacity>
      </View>

      {action.open && <Actions />}
    </>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
