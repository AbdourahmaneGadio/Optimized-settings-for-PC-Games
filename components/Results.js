import React from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';

const Results = ({gameResults, onPress}) => {

    return (
        <View>
            <Text>Results : </Text>
            {gameResults && gameResults.map && gameResults.map((actualGame) => {
                return (
                    <View style={styles.container} onPress={onPress}>
                        <View style={styles.containerTitle}>
                            <Text>Jeu 1</Text>
                        </View>
                        <View style={styles.gameImageContainer}>
                            <Image source={''} style={styles.imageCover} />
                        </View>

                    </View>
                );
            })}
        </View>
    );
}

export default Results;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        padding: 30,
        justifyContent: 'flex-start',
        borderRadius: 30,
        width: "20%",
        cursor: 'pointer',
    },
    containerTitle: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 18,
    },
    gameImageContainer: {
        borderRadius: 18,
    },
    imageCover: {
        width: 100,
        height: 150,
    }
});

