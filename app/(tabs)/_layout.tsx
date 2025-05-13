import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Icon } from "react-native-elements";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#000",
          borderColor: "#000",
        },
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Minhas músicas",
          tabBarIcon: ({ color }) => (
            <Icon name="queue-music" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
