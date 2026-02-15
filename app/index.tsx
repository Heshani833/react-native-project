import Header from "@/layout/header";
import Nav from "@/layout/nav";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      renderNavigationView={() => <Nav />}
      drawerWidth={300}
      drawerPosition="left"
    >
      <SafeAreaView className="flex-1 bg-white">
        <Header
          Left={
            <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
              <AntDesign name="menu" size={24} color="black" />
            </TouchableOpacity>
          }
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
    </DrawerLayoutAndroid>
  );
}
