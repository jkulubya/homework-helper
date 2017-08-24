import React from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { Button, Container, Content, H2, Input, Item, Text } from 'native-base';
import { observer } from 'mobx-react';
import store from '../../Store';
import globalStyles from '../../Globals/styles';

const styles = {
    answerInput: {
        height: 200,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: globalStyles.colors.primaryColor,
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
    },
    container: {
        ...globalStyles.container,
        backgroundColor: '#fff',
    },
    labels: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    spacer: globalStyles.spacing.defaultSpacing,
};

@observer
export default class PostAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Answer: '',
            QuestionId: this.props.navigation.state.params.id,
            QuestionTitle: this.props.navigation.state.params.title,
        };
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        const header = `Bearer ${store.User.Token}`;
        const data = {
            questionId: this.state.QuestionId,
            text: this.state.Answer,
        };

        axios({
            method: 'post',
            url: `http://10.0.2.2:5000/api/questions/answer/${this.state.QuestionId}`,
            headers: { Authorization: header },
            data,
        })
        .then(() => {
            this.setState({
                networkError: false,
            });
            this.props.navigation.goBack();
        })
        .catch(
            () => { this.setState({ networkError: true }); },
        );
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.spacer}>
                        <H2>Q: {this.state.QuestionTitle}</H2>
                        <Text>Your answer below</Text>
                        <Item regular>
                            <Input
                              multiline
                              style={styles.answerInput}
                              textAlignVertical={'top'}
                              value={this.state.Answer}
                              onChangeText={value => this.setState({ Answer: value })}
                            />
                        </Item>
                        <Button block style={styles.button} onPress={() => this.buttonPress()}>
                            <Text style={styles.buttonText}>Post answer</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
