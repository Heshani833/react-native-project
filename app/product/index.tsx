import Header from "@/layout/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Product = () => {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <Header
        Left={
          <Link href="/" asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
          </Link>
        }
        CenterText="Product"
      />
      <Text>{params.name}</Text>
      <Text>{params.city}</Text>
    </SafeAreaView>
  );
};

export default Product;
