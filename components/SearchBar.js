// SearchBar.js
import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ onPress, onChangeText, searchActive, onPressReset }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          searchActive ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* Input field */}
        <TextInput
          style={searchActive ? styles.input__clicked : styles.input__unclicked}
          placeholder="Search the game's title"
          onChangeText={onChangeText}
        />
        {/* search Icon */}
        {searchActive && (
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 10, marginRight: 10 }}
            onPress={onPress}
          />
        )}

        {searchActive && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1, marginLeft: 10, marginRight: 10 }}
            onPress={onPressReset}
          />
        )}
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    borderColor: "yellow",
    borderWidth: 2,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "yellow",
    borderWidth: 2,
  },
  input__unclicked: {
    fontSize: 20,
    // marginLeft: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    fontFamily: "Quicksand",
  },
  input__clicked: {
    fontSize: 20,
    // marginLeft: 10,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    fontFamily: "Quicksand",
  },
});
