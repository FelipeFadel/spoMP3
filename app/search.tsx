import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import SearchBar from "@/components/SearchBar";
import { useGlobalSearchParams } from "expo-router";

export default function TabOneScreen() {
  const { searchAuto } = useGlobalSearchParams();

  const [autoSearch, setAutoSearch] = useState(searchAuto || "");

  console.log(searchAuto);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Busque por titulo ou artista"
        defaultSearch={searchAuto?.toString()}
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
