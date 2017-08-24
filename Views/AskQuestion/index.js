import React from 'react';
import { Button, Input, Item, Text } from 'native-base';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { observer } from 'mobx-react';
import Picker from './Components/Picker';
import store from '../../Store';
import styles from './styles';

@observer
export default class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            TopCategories: [],
            MiddleCategories: [],
            BottomCategories: [],
            SelectedTopCategory: {
                id: 99999,
            },
            SelectedMiddleCategory: {
                id: 99999,
            },
            SelectedBottomCategory: {
                id: 99999,
            },
            QuestionDescription: '',
            QuestionTitle: '',
            networkError: false,
        };
        this.topLevelChange = this.topLevelChange.bind(this);
        this.middleLevelChange = this.middleLevelChange.bind(this);
        this.bottomLevelChange = this.bottomLevelChange.bind(this);
    }

    componentDidMount() {
        const header = `Bearer ${store.User.Token}`;
        axios({
            url: 'http://10.0.2.2:5000/api/categories',
            headers: { Authorization: header },
        })
        .then((response) => {
            this.setState({
                Categories: response.data,
                TopCategories: response.data.filter(item => item.parentId === null),
            });
        });
    }

    topLevelChange(value) {
        if (value === 99999) return;
        const selectedTopCategory = this.state.Categories.filter(item => item.id === value)[0];
        const middleCategories = this.state.Categories
                                    .filter(item => item.parentId === selectedTopCategory.id);
        this.setState({
            SelectedTopCategory: selectedTopCategory,
            MiddleCategories: middleCategories,
            BottomCategories: [],
        });
    }

    middleLevelChange(value) {
        if (value === 99999) return;
        const selectedMiddleCategory = this.state.Categories.filter(item => item.id === value)[0];
        const bottomCategories = this.state.Categories
                                    .filter(item => item.parentId === selectedMiddleCategory.id);
        this.setState({
            SelectedMiddleCategory: selectedMiddleCategory,
            BottomCategories: bottomCategories,
        });
    }

    bottomLevelChange(value) {
        if (value === 99999) return;
        const selectedBottomCategory = this.state.Categories.filter(item => item.id === value)[0];
        this.setState({
            SelectedBottomCategory: selectedBottomCategory,
        });
    }

    submitButtonPressed() {
        const header = `Bearer ${store.User.Token}`;

        const { navigate } = this.props.navigation;

        const data = {
            title: this.state.QuestionTitle,
            description: this.state.QuestionDescription,
            categoryId: this.state.SelectedBottomCategory.id,
        };

        axios({
            method: 'post',
            url: 'http://10.0.2.2:5000/api/questions',
            data,
            headers: { Authorization: header },
        })
        .then(() => {
            this.setState({
                networkError: false,
            });
            navigate('Index');
        })
        .catch(
            () => { this.setState({ networkError: true }); },
        );
    }

    render() {
        return (
            <KeyboardAwareScrollView
              enableAutoAutomaticScroll={false}
              enableOnAndroid
              style={styles.container}
            >
                <View style={styles.padding}>
                    <Text style={styles.labelPrompt}>Ask a new question below</Text>
                    <Text style={styles.label}>Grade</Text>
                    <Picker
                      items={this.state.TopCategories}
                      onValueChange={value => this.topLevelChange(value)}
                      selectedValue={this.state.SelectedTopCategory.id}
                    />
                    <Text style={styles.label}>Subject</Text>
                    <Picker
                      items={this.state.MiddleCategories}
                      onValueChange={value => this.middleLevelChange(value)}
                      selectedValue={this.state.SelectedMiddleCategory.id}
                    />
                    <Text style={styles.label}>Topic</Text>
                    <Picker
                      items={this.state.BottomCategories}
                      onValueChange={value => this.bottomLevelChange(value)}
                      selectedValue={this.state.SelectedBottomCategory.id}
                    />
                    <Text style={styles.label}>Question Title</Text>
                    <Item regular>
                        <Input
                          style={styles.titleInput}
                          value={this.state.QuestionTitle}
                          onChangeText={value => this.setState({ QuestionTitle: value })}
                        />
                    </Item>
                    <Text style={styles.label}>Description</Text>
                    <Item regular>
                        <Input
                          multiline
                          style={styles.descriptionInput}
                          textAlignVertical={'top'}
                          value={this.state.QuestionDescription}
                          onChangeText={value => this.setState({ QuestionDescription: value })}
                        />
                    </Item>
                    {/* <Text style={styles.label}>Add attachment</Text> */}
                    <Button
                      block
                      style={styles.submitButton}
                      onPress={() => this.submitButtonPressed()}
                    >
                        <Text>Submit Question</Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
