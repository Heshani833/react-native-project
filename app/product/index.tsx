import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Product = () => {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View>
      <Text>{params.name}</Text>
      <Text>{params.city}</Text>
    </View>
  );
};

export default Product;
