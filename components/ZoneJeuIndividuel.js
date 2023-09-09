import { RAWG_API_KEY } from "@env";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ZoneJeuIndividuel({ actualGame, onPress }) {
  const myButton = (
    <AntDesign
      name="play"
      size={32}
      style={styles.playButton}
      onPress={() => console.log("video press")}
    />
  );

  const getVideo = async () => {
    await fetch(`https://rawg.io/api/games/3498/movies?key=${RAWG_API_KEY}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        const video = results[0].data["480"];
        setVideo(video);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Pressable onPress={() => onPress(actualGame.slug)} key={actualGame.id}>
        <ImageBackground
          source={{ uri: actualGame.background_image }}
          style={styles.container}
          resizeMode="cover"
          blurRadius={5}
          imageStyle={{ borderRadius: 30 }}
        >
          {" "}
          <View>
            <View style={styles.containerTitle}>
              <Text>{actualGame.name}</Text>
            </View>
            <View style={styles.imageContainer}>
              <ImageBackground
                source={{ uri: actualGame.background_image }}
                style={styles.imageCover}
                resizeMode="cover"
              >
                {myButton}
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    justifyContent: "flex-start",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 10,
  },
  containerTitle: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 18,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageCover: {
    // Make the image expand to cover the video's dimensions
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "grey",
    borderRadius: 40,
    padding: 5,
  },
});
