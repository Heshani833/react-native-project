import Footer from "@/layout/footer";
import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <View className="flex-1">
        <Slot />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
