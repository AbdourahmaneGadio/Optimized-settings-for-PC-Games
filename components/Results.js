import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import ZoneJeuIndividuel from "./ZoneJeuIndividuel";

const Results = ({ gameResults, onPress }) => {
  return (
    <View>
      <Text>Results : </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={gameResults}
          renderItem={({ item }) => (
            <ZoneJeuIndividuel 
            actualGame={item} 
            onPress={onPress} />
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
