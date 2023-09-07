import React from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';

const Results = ({gameResults, onPointerEnter}) => {

    return (
        <View>
            <Text>Results : </Text>
            {gameResults && gameResults.map && gameResults.map((actualGame, index) => {
                return (
                  <View
                    style={styles.container}
                    onPointerEnter={onPointerEnter}
                    key={index}
                    id={actualGame.slug}
                  >
                    <View style={styles.containerTitle}>
                      <Text>{actualGame.name}</Text>
                    </View>
                    <View style={styles.gameImageContainer}>
                      <Image
                        source={actualGame.background_image}
                        style={styles.imageCover}
                      />
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

