import React from 'react';
import axios from 'axios';
import { Container, Content } from 'native-base';
import Answers from './Components/Answers';
import Question from './Components/Question';
import styles from './styles';
import store from '../../Store';


export default class ViewQuestion extends React.Component {
    constructor(props) {
        super(props);
        const question = this.props.navigation.state.params;
        this.state = {
            question,
            answers: [],
        };
    }

    componentDidMount() {
        const header = `Bearer ${store.User.Token}`;

        axios.all([
            axios.get(`http://10.0.2.2:5000/api/questions/${this.state.question.id}`, {
                headers: { Authorization: header },
            }),
            axios.get(`http://10.0.2.2:5000/api/questions/answers/${this.state.question.id}`, {
                headers: { Authorization: header },
            }),
        ])
        .then(axios.spread((question, answers) => {
            this.setState({
                question: question.data,
                answers: answers.data,
            });
        }))
        .catch(() => { this.setState({ networkError: true }); });
    }

    answerButtonPressed = () => {
        const { navigate } = this.props.navigation;
        const data = {
            id: this.state.question.id,
            title: this.state.question.title,
        };
        navigate('PostAnswer', data);
    }

    answerSelected = (id) => {
        const { navigate } = this.props.navigation;
        navigate('ViewAnswer', id);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Question
                      question={this.state.question}
                      answerButtonPressed={this.answerButtonPressed}
                    />
                    <Answers
                      answers={this.state.answers}
                      answerTapped={this.answerSelected}
                    />
                </Content>
            </Container>
        );
    }
}
