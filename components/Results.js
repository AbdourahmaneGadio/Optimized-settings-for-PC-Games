import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import SingleGameZone from "./SingleGameZone";

const Results = ({ gameResults, onPress }) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={gameResults}
          renderItem={({ item }) => (
            <SingleGameZone actualGame={item} onPress={onPress} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
