import React from "react";
import { Text, View } from "react-native";

interface IHeader {
  Left?: React.ReactNode;
  CenterText?: string;
  Center?: React.ReactNode;
  Right?: React.ReactNode;
}

const Header = ({ Left, CenterText, Center, Right }: IHeader) => {
  return (
    <View
      style={{ elevation: 5 }}
      className="w-full bg-gray-500 px-5 py-3 flex-row items-center justify-between"
    >
      <View>{Left ?? <View />}</View>

      <View>
        {Center ? (
          Center
        ) : CenterText ? (
          <Text className="text-xl text-black">{CenterText}</Text>
        ) : (
          <View />
        )}
      </View>

      <View>{Right ?? <View />}</View>
    </View>
  );
};

export default Header;
