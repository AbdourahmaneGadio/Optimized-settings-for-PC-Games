import { RAWG_API_KEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
        <LinearGradient
          colors={["#04803d", "#6ea416", "#dad600"]}
          style={styles.container}
        >
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
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    alignItems: "center",
    padding: 30,
    justifyContent: "flex-start",
    borderRadius: 30,
    // width: "20%",
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
