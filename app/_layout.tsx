import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, Slot } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView edges={["bottom"]} className="flex-1">
      <View className="flex-1">
        <Slot />
      </View>

      <View
        style={{ elevation: 5 }}
        className="h-14 bg-blue-400 flex-row items-center justify-around"
      >
        <TouchableOpacity
          onPress={() => router.navigate("./")}
          className="items-center"
        >
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.navigate("./product")}
          className="items-center"
        >
          <Feather name="box" size={24} color="black" />
          <Text>Product</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.navigate("./category")}
          className="items-center"
        >
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Category</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.navigate("./profile")}
          className="items-center"
        >
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
