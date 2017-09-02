import React from 'react';
import moment from 'moment';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';

const styles = {
    answer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingTop: 10,
        paddingBottom: 10,
    },
    topMetadata: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 5,
    },
    userName: {
        color: '#666',
        flex: 1,
    },
    date: {
        color: '#666',
        flex: 1,
        textAlign: 'right',
    },
};

const Answer = props => (
    <TouchableOpacity
      style={styles.answer}
      onPress={() => props.answerTapped(props.answer.id)}
    >
        <View style={styles.topMetadata}>
            <Text style={styles.userName}>{props.answer.creator.userName}</Text>
            <Text style={styles.date}>{moment(props.answer.date).fromNow()}</Text>
        </View>
        <Text>{props.answer.text}</Text>
    </TouchableOpacity>
);

export default Answer;
