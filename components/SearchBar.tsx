import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import CardMusic from "./CardMusic";

import MOCK_DATA from "@/MOCK_DATA.json";

type searchProps = {
  placeholder: string;
  autoSearch?: string;
};

export default function SearchBar({ placeholder, autoSearch }: searchProps) {
  const [search, setSearch] = useState(autoSearch ?? "");

  const filteredData = MOCK_DATA.filter(
    (item) => item.title.includes(search) || item.artist.includes(search)
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardMusic {...item} />}
        ListEmptyComponent={
          <Text style={styles.noResults}>Nenhum resultado encontrado</Text>
        }
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
  input: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  noResults: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});
