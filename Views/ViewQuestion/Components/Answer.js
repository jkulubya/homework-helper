import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const styles = {
    answer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

const Answer = props =>
    (
        <View style={styles.answer}>
            <Text>{props.answer.creator.userName}</Text>
            <Text>2 years ago</Text>
            <Text>{props.answer.text}</Text>
        </View>
    );

export default Answer;
