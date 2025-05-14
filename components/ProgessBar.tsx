import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

export default function ProgessBar({ progress }: ProgressBarProps) {
  console.log("Progress value:", progress);
  return (
    <View style={styles.minimumTrack}>
      <View style={[styles.maximumTrack, { width: `${progress}%` }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  minimumTrack: {
    alignContent: "center",
    width: "99%",
    marginBottom: 20,
    height: 3,
    backgroundColor: "rgb(100 100 100)",
  },
  maximumTrack: {
    height: 3,
    backgroundColor: "rgb(50 200 100)",
  },
});
