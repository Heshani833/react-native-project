import Header from "@/layout/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Category() {
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <Header
        Left={<Ionicons name="arrow-back-outline" size={24} color="black" />}
        CenterText="Category"
      />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-800">
          Category Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}
