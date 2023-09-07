import React from 'react';
import { View } from 'react-native';

const Results = ({gameResults, onPress}) => {

    return (
        <View>
            {gameResults.map((actualGame) => {
                return (
                    <View>
                        <Text onPress={onPress}>a</Text>
                    </View>
                );
            })}
        </View>
    );
}

export default Results;

