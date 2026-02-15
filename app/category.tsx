import Header from "@/layout/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Category() {
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
