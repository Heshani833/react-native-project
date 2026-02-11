import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Product() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-gray-800">Product Screen</Text>
      </View>
    </SafeAreaView>
  );
}
