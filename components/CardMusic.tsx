import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Icon } from "react-native-elements";
import { useActionSheet } from "@expo/react-native-action-sheet";

type cardProps = {
  id: string;
  title: string;
  artist: string;
  imgUrl: string;
};

export default function CardMusic({ id, title, artist, imgUrl }: cardProps) {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    router.push(`/post/${id}`);
  };

  const onPressAction = () => {
    const options = ["Deletar", "Buscar por artista", "Cancelar"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        if (selectedIndex === undefined) {
          console.log("Nenhuma ação selecionada");
          return;
        }
        switch (selectedIndex) {
          case 0:
            console.log("Deletar selecionado");
            break;

          case 1:
            console.log("Buscar Artista");
            router.push({
              pathname: "/search",
              params: { searchAuto: artist },
            });
            break;

          case cancelButtonIndex:
            console.log("Ação cancelada");
            break;

          default:
            console.log("Nenhuma ação selecionada");
        }
      }
    );
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
      <TouchableOpacity onPress={onPressAction}>
        <Icon
          name="ellipsis-vertical"
          type="ionicon"
          size={25}
          color="rgb(255 255 255)"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgb(30 30 30)",
    width: "98%",
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: 60,
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
