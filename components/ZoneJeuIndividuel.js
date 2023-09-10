import { RAWG_API_KEY } from "@env";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import LoadingIcon from "./LoadingIcon";

export default function ZoneJeuIndividuel({ actualGame, onPress }) {
  const myButton = (
    <AntDesign
      name="play"
      size={32}
      style={styles.playButton}
      onPress={() => console.log("video press")}
    />
  );

  const [dataPreview, setDataPreview] = useState({
    video: "",
    screenshots: [],
  });

  useEffect(() => {
    const getVideo = async () => {
      await fetch(
        `https://rawg.io/api/games/${actualGame.id}/movies?key=${RAWG_API_KEY}`
      )
        .then((resp) => resp.json())
        .then(({ results }) => {
          const video = results[0].data["480"];
          setDataPreview({ video: video });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getScreenshots = async () => {
      await fetch(
        `https://rawg.io/api/games/${actualGame.id}/screenshots?key=${RAWG_API_KEY}`
      )
        .then((resp) => resp.json())
        .then(({ results }) => {
          const screenshots = results;
          setDataPreview({ screenshots: screenshots });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getVideo();

    if (dataPreview.video && dataPreview.video == "") {
      getScreenshots();
    }
  }, [setDataPreview]);

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
              {/* Video */}
              {dataPreview && dataPreview.video && (
                <View style={styles.imageContainer}>
                  {Platform.OS == "web" ? (
                    <HoverVideoPlayer
                      videoSrc={dataPreview.video}
                      pausedOverlay={
                        <View>
                          <ImageBackground
                            source={{ uri: actualGame.background_image }}
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                              height: 200,
                            }}
                          />
                        </View>
                      }
                      loadingOverlay={
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <LoadingIcon />
                        </View>
                      }
                      controlsList="nodownload nofullscreen"
                    />
                  ) : (
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
                  )}
                </View>
              )}
              {/* Screenshots */}

              {dataPreview && !dataPreview.video && dataPreview.screenshots && (
                <View style={styles.imageContainer}>
                  <Carousel
                    loop
                    width="300"
                    height="300"
                    autoPlay={true}
                    data={dataPreview.screenshots}
                    scrollAnimationDuration={4000}
                    renderItem={({ index }) => (
                      <ImageBackground
                        source={{ uri: dataPreview.screenshots[index].image }}
                        style={styles.imageCover}
                        resizeMode="cover"
                      />
                    )}
                  />
                </View>
              )}
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
