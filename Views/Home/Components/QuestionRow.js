import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    container: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 15,
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
            id: props.id,
            title: props.title,
            description: props.description,
            author: props.author,
        };
        this.pressed = this.pressed.bind(this);
    }

    pressed() {
        this.props.rowClicked(this.state);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.pressed} >
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.author}>{this.state.author}</Text>
                <Text style={styles.description}>{this.state.description}</Text>
            </TouchableOpacity>
        );
    }
}
