import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import moment from 'moment';
import Category from '../../Components/Category';

const styles = {
    container: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        alignSelf: 'stretch',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111',
    },
    author: {
        alignSelf: 'stretch',
        color: '#05A5D1',
        fontSize: 14,
    },
    text: {
        alignSelf: 'stretch',
        fontSize: 14,
    },
};

export default class QuestionRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
        };
        this.pressed = this.pressed.bind(this);
    }

    pressed() {
        this.props.rowClicked(this.state.question);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.pressed}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>{this.state.question.title}</Text>
                    <Text style={styles.date}>{moment(this.state.question.date).fromNow()}</Text>
                </View>
                <Text style={styles.author}>{this.state.question.author}</Text>
                <Text style={styles.description}>{this.state.question.description}</Text>
                <Category category={this.state.question.category} />
            </TouchableOpacity>
        );
    }
}
