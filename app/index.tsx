import useDrawer from "@/context/context-hooks/useDrawer";
import Header from "@/layout/header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const { drawer } = useDrawer();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        Left={
          <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
            <AntDesign name="menu" size={24} color="black" />
          </TouchableOpacity>
        }
        CenterText="Home"
      />
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-black text-xl font-bold">
          Tailwind is working
        </Text>

        <Link href="/category">Category</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>

        <Link
          href={{
            pathname: "/product/[productId]",
            params: {
              productId: "HIII", // ⚠ must match folder param name exactly
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
            pathname: "/product",
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
