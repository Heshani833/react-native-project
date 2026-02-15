import DrawerProvider from "@/context/drawer";
import Footer from "@/layout/footer";
import { Slot } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <DrawerProvider>
      <View className="flex-1 bg-white">
        {/* Content */}
        <View className="flex-1">
          <Slot />
        </View>

        {/* Footer Safe Area */}
        <SafeAreaView edges={["bottom"]}>
          <Footer />
        </SafeAreaView>
      </View>
    </DrawerProvider>
  );
};

export default RootLayout;
