import { Stack } from "expo-router";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import id from "./post/[id]";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Layout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#000");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Minhas Músicas",
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            headerStyle: { backgroundColor: "#121212" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="search"
          options={{
            title: "Buscar",
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            headerStyle: { backgroundColor: "#121212" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="post/[id]"
          options={{
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            headerStyle: { backgroundColor: "#121212" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}
