import React from "react";
import { Text, View } from "react-native";
import ZoneJeuIndividuel from "./ZoneJeuIndividuel";

const Results = ({ gameResults, onPress}) => {

  return (
    <View>
      <Text>Results : </Text>
      {gameResults &&
        gameResults.map &&
        gameResults.map((actualGame, index) => {
          return <ZoneJeuIndividuel actualGame={actualGame} key={index} onPress={onPress}/>;
        })}
    </View>
  );
};

export default Results;