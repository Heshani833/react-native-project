import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ← use this one
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-pink-500">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl font-bold">
          Tailwind is working
        </Text>
        <Link href={"/category"}>Category</Link>
        <Link href={"./products"}>Products</Link>
        <Link
          href={{
            pathname: "./product/[productId]",
            params: {
              ProductId: "HIII",
              name: "Heshani",
              age: 25,
              city: "Kandy",
            },
          }}
        >
          Amil
        </Link>
        <Link href={"./product"}>Product</Link>
      </View>
    </SafeAreaView>
  );
}
