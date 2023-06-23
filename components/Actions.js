import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { closeAction } from "../feature/service/actionSlice";

const Actions = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeAction());
  };

  return (
    <TouchableOpacity
      onPress={closeHandler}
      activeOpacity={1}
      className="w-screen h-screen absolute top-0 left-0 bg-[#00000072] flex justify-center items-center"
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={(e) => e.stopPropagation()}
        className="w-[85%] h-[200px] bg-[#0A1F3E] rounded-md flex justify-center items-center"
      >
        <Text className="text-[18px] text-white tracking-wide mb-[30px] font-bold">
          လုပ်ဆောင်မှုရွေးချယ်ရန်
        </Text>
        <View className=" flex flex-row items-center flex-wrap">
          <TouchableOpacity className="px-5 py-2 rounded bg-[#6C757D]">
            <Text className="text-white font-medium text-xs">ကြည့်မယ်</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-5 py-2 rounded bg-[#28A745] mx-2">
            <Text className="text-white font-medium text-xs">ပြင်ဆင်မယ်</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-5 py-2 rounded bg-[#DC3545]">
            <Text className="text-white font-medium text-xs">ဖျက်မယ်</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Actions;
