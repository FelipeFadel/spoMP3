import CardMusic from "@/components/CardMusic";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

import MOCK_DATA from "@/MOCK_DATA.json";
import { router, Stack } from "expo-router";
import { Icon } from "react-native-elements";

export default function index() {
  const onPress = () => {
    router.push("/search");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.searchButton} onPress={onPress}>
              <Icon name="search" size={25} color="rgb(255 255 255)" />
            </TouchableOpacity>
          ),
        }}
      />
      <FlatList
        data={MOCK_DATA}
        renderItem={({ item }) => <CardMusic {...item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  searchButton: {
    width: 45,
    height: 45,
    marginRight: 5,
    alignContent: "center",
    justifyContent: "center",
  },
});
