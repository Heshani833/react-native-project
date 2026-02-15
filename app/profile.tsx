import Header from "@/layout/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
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
        CenterText="Profile"
      />
      <Text className="p-5">Profile</Text>
    </SafeAreaView>
  );
}
