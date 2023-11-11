import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SingleGameZone({ actualGame, onPress}) {

  return (
    <View>
      <Pressable onPress={() => onPress(actualGame)} key={actualGame.id}>
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
                   
                  </ImageBackground>
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
