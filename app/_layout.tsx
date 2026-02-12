import { Link, Slot } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View className="relative w-full flex-1">
      <Slot />

      <View className="w-full absolute h-12 bottom-0 left-0 z-50 bg-red-400 items-center justify-center flex-row items-center justify-center">
        <View>
          <Link href={"./product"}>Product</Link>
        </View>
      </View>
    </View>
  );
};

export default RootLayout;
