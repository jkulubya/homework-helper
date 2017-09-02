import React from 'react';
import { View } from 'react-native';
import { Button, H1, Text } from 'native-base';
import moment from 'moment';
import globalStyles from '../../../Globals/styles';
import Category from '../../Components/Category';

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
        marginTop: 15,
    },
    topMetadata: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
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

const Question = props => (
    <View style={styles.container}>
        <H1 style={styles.header}>{props.question.title}</H1>
        <View style={styles.topMetadata}>
            <Text style={styles.userName}>{props.question.creator.userName}</Text>
            <Text style={styles.date}>{moment(props.question.date).fromNow()}</Text>
        </View>
        <Text>{props.question.description}</Text>
        <Category category={props.question.category} />
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
