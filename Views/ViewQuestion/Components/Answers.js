import React from 'react';
import { FlatList, View } from 'react-native';
import { H2 } from 'native-base';
import globalStyles from '../../../Globals/styles';
import Answer from './Answer';

const styles = {
    container: {
        padding: 15,
        paddingTop: 0,
    },
    header: {
        backgroundColor: globalStyles.colors.primaryColor,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
    },
};

const Answers = props => (
    <View>
        <H2 style={styles.header}>{`${props.answers.length} answers`}</H2>
        <FlatList
          data={props.answers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Answer answer={item} answerTapped={props.answerTapped} />}
          style={styles.container}
        />
    </View>
    );

export default Answers;
