import React from 'react';
import axios from 'axios';
import { Container, Content } from 'native-base';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react';
import styles from './styles';
import QuestionRow from './Components/QuestionRow';
// import axios from '../../Globals/axios';
import store from '../../Store';

@observer
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            networkError: false,
        };
    }

    componentDidMount() {
        const header = `Bearer ${store.User.Token}`;

        axios({
            url: 'http://10.0.2.2:5000/api/questions',
            headers: { Authorization: header },
        })
        .then((response) => {
            this.setState({
                questions: response.data,
                networkError: false,
            });
        })
        .catch(
            () => { this.setState({ networkError: true }); },
        );
    }

    handleRowClick(question) {
        const { navigate } = this.props.navigation;
        navigate('Question', question);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <FlatList
                      data={this.state.questions}
                      keyExtractor={item => item.id}
                      renderItem={({ item }) => (<QuestionRow
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.creatorId}
                        description={item.description}
                        rowClicked={question => this.handleRowClick(question)}
                      />)}
                    />
                </Content>
            </Container>
        );
    }
}
