import { Text, View } from "react-native";

interface IHeader {
  Left?: React.ReactNode;
  Center?: React.ReactNode;
  Right?: React.ReactNode;
}

const Header = ({ Left, Center, Right }: IHeader) => {
  return (
    <View
      style={{ elevation: 5 }}
      className="w-full bg-gray-500 px-5 py-3 flex-row items-center"
    >
      <View className="flex-1 items-start">
        {Left ? Left : <Text>Header</Text>}
      </View>

      <View className="flex-1 items-center">
        {Center ? Center : <Text>Header</Text>}
      </View>

      <View className="flex-1 items-end">
        {Right ? Right : <Text>Header</Text>}
      </View>
    </View>
  );
};

export default Header;
