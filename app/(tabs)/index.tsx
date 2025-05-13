import CardMusic from "@/components/CardMusic";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";

import MOCK_DATA from "@/MOCK_DATA.json";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
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
});
