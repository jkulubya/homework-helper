import React from 'react';
import { View } from 'react-native';
import { Button, H1, Text } from 'native-base';
import globalStyles from '../../../Globals/styles';

const styles = {
    container: {
        padding: 15,
    },
    header: {
        color: globalStyles.colors.primaryColor,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: globalStyles.colors.primaryColor,
        marginBottom: 10,
    },
};

const Question = props =>
    (
        <View style={styles.container}>
            <H1 style={styles.header}>{props.question.title}</H1>
            <Text>{props.question.creator.userName}</Text>
            {/* <Text>2 years ago</Text> */}
            <Text>
                {props.question.description}
            </Text>
            <Text>Grade</Text>
            <Text>10</Text>
            <Text>Subject</Text>
            <Text>Mathematics</Text>
            <Button
              block
              style={styles.submitButton}
              onPress={props.answerButtonPressed}
            >
                <Text>Post answer</Text>
            </Button>
        </View>
    );

export default Question;
