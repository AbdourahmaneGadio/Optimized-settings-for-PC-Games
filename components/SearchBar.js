// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ onPress, onChange, searchActive, onPressReset }) => {

    return (
        <View style={styles.container}>
            <View
                style={
                    searchActive
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >

                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search the game's title"
                    onChange={onChange}
                    onFocus={onChange}
                />
                {/* search Icon */}
                {searchActive && <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                    onPress={onPress}
                />}

                {searchActive && <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={onPressReset} />}
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
        width: "50%",
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
    input: {
        fontSize: 20,
        // marginLeft: 10,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
    },
});