import { RAWG_API_KEY } from "@env";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Platform,
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
      onPress={handleVideoPress}
    />
  );

  const [showVideo, setShowVideo] = useState(false);

  const handleVideoPress = () => {
    setShowVideo(true);
    alert('video');
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
          <View>
            <View style={styles.containerTitle}>
              <Text style={{ fontFamily: "Quicksand" }}>{actualGame.name}</Text>
            </View>
            <View>
              <View style={styles.imageContainer}>
                <View style={styles.imageContainer}>
                  <ImageBackground
                    source={{ uri: actualGame.background_image }}
                    style={{
                      width: "100%",
                      height: "100%",
                      flex: 1,
                      resizeMode: "cover",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {myButton}
                  </ImageBackground>
                </View>
              </View>
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
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageCover: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
