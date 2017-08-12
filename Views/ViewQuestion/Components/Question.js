import React from 'react';
import { View } from 'react-native';
import { H1, Text } from 'native-base';
import globalStyles from '../../../Globals/styles';

const styles = {
    container: {
        padding: 15,
    },
    header: {
        color: globalStyles.colors.primaryColor,
        fontWeight: 'bold',
    },
};

const Question = props =>
    (
        <View style={styles.container}>
            <H1 style={styles.header}>{props.question.title}</H1>
            <Text>jkulubya</Text>
            <Text>2 years ago</Text>
            <Text>
                {props.question.description}
            </Text>
            <Text>Grade</Text>
            <Text>10</Text>
            <Text>Subject</Text>
            <Text>Mathematics</Text>
        </View>
    );

export default Question;
