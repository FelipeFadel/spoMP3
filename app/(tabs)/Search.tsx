import SearchBar from "@/components/SearchBar";
import { StyleSheet, View, Text } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Busque por titulo ou artista"
        autoSearch="America"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
});
