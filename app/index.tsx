import Header from "@/layout/header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        Left={<AntDesign name="menu" size={24} color="black" />}
        CenterText="Home"
      />
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-black text-xl font-bold">
          Tailwind is working
        </Text>
        <Link href={"/category"}>Category</Link>
        <Link href={"./products"}>Products</Link>
        <Link href={"./profile"}>Profile</Link>
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
        <Link
          href={{
            pathname: "./product",
            params: {
              name: "Shehana",
              city: "Ampara",
            },
          }}
        >
          Product
        </Link>
      </View>
    </SafeAreaView>
  );
}
