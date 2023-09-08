import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Results = ({ gameResults, onPress }) => {
  return (
    <View>
      <Text>Results : </Text>
      {gameResults &&
        gameResults.map &&
        gameResults.map((actualGame, index) => {
          return (
            <Pressable onPress={onPress} key={index}>
              <View style={styles.container} id={actualGame.slug}>
                <View style={styles.containerTitle}>
                  <Text>{actualGame.name}</Text>
                </View>
                <View>
                  <Image
                    source={actualGame.background_image}
                    style={styles.imageCover}
                  />
                </View>
              </View>
            </Pressable>
          );
        })}
    </View>
  );
};

export default Results;

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

  imageCover: {
    width: 300,
    height: 200,
    borderRadius:20,
  },
});
