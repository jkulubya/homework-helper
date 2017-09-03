import React from 'react';
import axios from 'axios';
import { Container, Content, H1, H2, Text } from 'native-base';
import { View } from 'react-native';
import moment from 'moment';
import globalStyles from '../../Globals/styles';
import store from '../../Store';

const styles = {
    answerText: {
        color: globalStyles.colors.primaryColor,
        fontSize: 18,
    },
    container: {
        backgroundColor: '#fff',
        paddingTop: 15,
    },
    questionTitle: {
        color: globalStyles.colors.primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    spacer: globalStyles.spacing.defaultSpacing,
    subtitle: {
        color: globalStyles.colors.primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    metadata: {
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

export default class ViewQuestion extends React.Component {
    constructor(props) {
        super(props);
        const { id, question } = this.props.navigation.state.params;
        this.state = {
            answer: {
                id,
                questionId: 0,
                creatorId: '',
                date: '',
                text: '',
                question: null,
                creator: {
                    userName: '',
                    id: '',
                    email: '',
                },
            },
            question,
        };
    }

    componentDidMount() {
        const header = `Bearer ${store.User.Token}`;

        axios.get(`http://10.0.2.2:5000/api/answers/${this.state.answer.id}`, {
            headers: { Authorization: header },
        })
            .then((result) => {
                this.setState({
                    answer: result.data,
                });
            });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.spacer}>
                        <H1 style={styles.questionTitle}>{this.state.question.title}</H1>
                        <H2 style={styles.subtitle}>Answer</H2>
                        <View style={styles.metadata}>
                            <Text style={styles.userName}>
                                {this.state.answer.creator.userName}
                            </Text>
                            <Text style={styles.date}>
                                {moment(this.state.answer.date).fromNow()}
                            </Text>
                        </View>
                        <Text style={styles.answerText}>
                            {this.state.answer.text}
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
