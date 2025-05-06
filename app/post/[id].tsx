import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function id() {
  const { id, title, artist, imgUrl } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O seu ID é: {id}</Text>
      <View>
        <Text style={styles.hText}>{title}</Text>
        <Text style={styles.hText}>{artist}</Text>
        <Image
          source={{ uri: imgUrl as string }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
    color: "#fff",
  },
  hText: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
    color: "#fff",
  },
  link: {
    fontSize: 18,
    color: "#73BDA8",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});
