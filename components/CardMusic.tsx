import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

type cardProps = {
  id: string;
  title: string;
  artist: string;
  imgUrl: string;
};

export default function CardMusic({ id, title, artist, imgUrl }: cardProps) {
  const router = useRouter();

  const onPress = () => {
    router.push({
      pathname: "/post/[id]",
      params: { id: id.toString(), title, artist, imgUrl },
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={{
            uri: imgUrl,
          }}
          width={60}
          height={60}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{artist}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#121212",
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: 60,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(255 255 255)",
  },
  subTitle: {
    fontSize: 15,
    color: "rgb(230 230 230)",
  },
  content: {
    justifyContent: "center",
    marginLeft: 10,
    height: 50,
    width: "80%",
  },
});
