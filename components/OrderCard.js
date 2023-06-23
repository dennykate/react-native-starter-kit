import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { openAction } from "../feature/service/actionSlice";

const OrderCard = () => {
  const dispatch = useDispatch();

  const onPressHandler = () => {
    dispatch(openAction({ payload: { id: 12345 } }));
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      activeOpacity={0.9}
      style={{ alignSelf: "center", elevation: 5 }}
      className="w-[375px] h-[100px] bg-[#F5F5DC]  flex items-center flex-row rounded-[10px] px-3 justify-between
       overflow-hidden my-[7px]"
    >
      <View className=" flex items-center flex-row">
        <View className="w-[80px] h-[80px] rounded-[10px] overflow-hidden mr-3">
          <Image
            source={{
              uri: "https://d1e1vgxjd1htwd.cloudfront.net/-/media/recipe-hainanese-chicken-rice.jpg",
            }}
            className="w-full h-full object-cover"
          />
        </View>

        <View className="flex flex-col items-start h-[80px] justify-between">
          <Text className=" text-[17px] font-medium text-black">
            ကြက်ဆီထမင်း
          </Text>
          <View className="flex flex-row gap-2">
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons name="rice" color="#7A7373" size={16} />
              <Text className="text-xs">100</Text>
            </View>
            <Text>|</Text>
            <View className="flex flex-row items-center">
              <Text className="text-xs">$3500</Text>
            </View>
          </View>
          <View className="flex flex-row items-center gap-1">
            <MaterialCommunityIcons name="calendar" color="#DD1818" size={14} />
            <Text className="text-xs text-primary font-semibold">6.5.2023</Text>
          </View>
          <View className="flex flex-row items-center gap-1">
            <MaterialCommunityIcons name="alarm" color="#7A7373" size={14} />
            <Text className="text-xs ">5:00 AM</Text>
          </View>
        </View>
      </View>

      <View className="w-[50px] h-[80px] flex items-end flex-row justify-end">
        <View
          className="w-[34px] h-[34px] bg-primary rounded-full p-[1px]"
          activeOpacity={0.9}
        >
          <View className="w-full h-full border-[2px] border-white rounded-full flex justify-center items-center">
            <MaterialCommunityIcons
              color="white"
              size={16}
              name="dots-vertical"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
