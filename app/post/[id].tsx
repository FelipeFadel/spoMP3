import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Audio } from "expo-av";
import { Icon, Slider } from "react-native-elements";

import MOCK_DATA from "@/MOCK_DATA.json";

export default function id() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const music = MOCK_DATA.find((item) => item.id === id);

  const [duration, setDuration] = useState(1);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let currentSound: Audio.Sound;

    const loadAudio = async () => {
      if (music?.audioUrl) {
        const { sound: loadedSound, status } = await Audio.Sound.createAsync(
          { uri: music.audioUrl },
          { shouldPlay: false }
        );
        setSound(loadedSound);
        currentSound = loadedSound;
        if (status.isLoaded && status.durationMillis !== undefined) {
          setDuration(status.durationMillis / 1000);
        }
      }
    };

    loadAudio();

    return () => {
      if (currentSound) {
        currentSound.unloadAsync();
      }
      setIsPlaying(false);
    };
  }, [music?.audioUrl]);

  // useEffect(() => {
  //   let interval: number;

  //   const updateValue = async () => {
  //     if (sound) {
  //       const status = await sound.getStatusAsync();
  //       if (status.isLoaded && status.positionMillis !== undefined) {
  //         setValue(Math.floor(status.positionMillis / 1000));
  //       }
  //     }
  //   };

  //   if (isPlaying) {
  //     interval = setInterval(updateValue, 1000);
  //   }

  //   return () => clearInterval(interval);
  // }, [isPlaying, sound]);

  const handlePlayPause = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        if (status.isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      }
    }
  };

  const handleNext = () => {
    const currentIndex = MOCK_DATA.findIndex((item) => item.id === id);
    const nextItem = MOCK_DATA[currentIndex + 1]?.id;
    if (nextItem) {
      router.replace(`/post/${nextItem}`);
    }
  };

  const handleBack = () => {
    const currentIndex = MOCK_DATA.findIndex((item) => item.id === id);
    const backItem = MOCK_DATA[currentIndex - 1]?.id;
    if (backItem) {
      router.replace(`/post/${backItem}`);
    }
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: music?.title }} />

      <Image
        source={{ uri: music?.imgUrl as string }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{music?.title}</Text>
      <Text style={styles.artist}>{music?.artist}</Text>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={Math.floor(value)}
          onValueChange={(val) => setValue(Math.floor(val))}
          onSlidingComplete={async (val) => {
            if (sound) {
              await sound.setPositionAsync(val * 1000);
            }
          }}
          minimumValue={0}
          allowTouchTrack
          minimumTrackTintColor="#34D1BF"
          maximumTrackTintColor="#aaa"
          thumbTintColor="#34D1BF"
          thumbStyle={{ width: 10, height: 10, borderRadius: 5 }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>0:00</Text>

          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <TouchableOpacity onPress={handleBack}>
          <Icon name="skip-previous" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Icon
            name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
            size={70}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Icon name="skip-next" size={50} color="#fff" />
        </TouchableOpacity>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 4,
  },
  artist: {
    fontSize: 16,
    fontWeight: "500",
    color: "#aaa",
    marginBottom: 30,
  },
  sliderContainer: {
    width: "100%",
    alignItems: "center",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: -10,
  },
  timeText: {
    color: "#aaa",
    fontSize: 12,
  },
});
