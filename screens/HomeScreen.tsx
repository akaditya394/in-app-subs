import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ActionRow from "../components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 relative bg-[#181818] ">
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-50 top-5 right-10 items-center"
        >
          <Ionicons name="person-circle" size={18} color="#61DBFB" />
          <Text className="text-[#61DBFB] text-center text-xs">UPGRADE</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/react.png")}
          className="w-full h-56"
        />

        <View className="mx-5">
          <View className="flex flex-row justify-between space-x-2">
            <ActionRow
              icon="search"
              title="Browse"
              screen="Demo"
              color="#434242"
              vertical
            />
            <ActionRow
              icon="add"
              title="Track"
              screen="Demo"
              color="#434242"
              vertical
            />
          </View>

          <ActionRow
            icon="play"
            title="Connect"
            screen="Demo"
            color="#434242"
          />
          <ActionRow
            icon="add"
            title="Add"
            screen="Demo"
            color="#434242"
            requiresPro
          />
          <ActionRow
            icon="create-outline"
            title="Create"
            screen="Demo"
            color="#434242"
            requiresPro
          />
          <ActionRow
            icon="enter"
            title="Join"
            screen="Demo"
            color="#434242"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
