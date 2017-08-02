import React from 'react';
import { View } from 'react-native';
import { Button, Container, Content, Input, Item, Text } from 'native-base';
import Store from '../../Store';
import globalStyles from '../../Globals/styles';

const styles = {
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
        backgroundColor: globalStyles.colors.secondaryColor,
    },
    field: {
        backgroundColor: '#fff',
    },
    fieldWrapper: {
        marginBottom: 20,
    },
    labels: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    links: {
        marginBottom: 5,
        textAlign: 'center',
    },
    logo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logoContainer: {
        marginTop: 20,
        marginBottom: 30,
    },
    spacer: globalStyles.spacing.defaultSpacing,
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: '',
            requestStatus: 'IDLE',
        };
        this.loginButtonPress = this.loginButtonPress.bind(this);
    }

    loginButtonPress() {
        this.setState({ requestStatus: 'WAITING' });
        Store.LoginUser(this.state.Username, this.state.Password);
        this.setState({ requestStatus: 'IDLE' });

        if (Store.User.IsLoggedIn) {
            this.props.navigation.navigate('AppNavigator');
        }
    }

    forgotPasswordButtonPress() {
        const { navigate } = this.props.navigation;
        navigate('ForgotPassword');
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.spacer}>
                        <View style={styles.logoContainer}>
                            <Text style={styles.logo}>Homework</Text>
                            <Text style={styles.logo}>Helper</Text>
                        </View>
                        <Text style={styles.labels}>Username</Text>
                        <Item style={styles.fieldWrapper} regular>
                            <Input
                              autoCapitalize={'none'}
                              autoCorrect={false}
                              onChangeText={text => this.setState({ Username: text })}
                              style={styles.field}
                              value={this.state.Username}
                            />
                        </Item>
                        <Text style={styles.labels}>Password</Text>
                        <Item style={styles.fieldWrapper} regular>
                            <Input
                              autoCapitalize={'none'}
                              autoCorrect={false}
                              onChangeText={text => this.setState({ Password: text })}
                              secureTextEntry
                              style={styles.field}
                              value={this.state.Password}
                            />
                        </Item>
                        <Button block style={styles.button} onPress={() => this.loginButtonPress()}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </Button>
                        <Text style={styles.links} onPress={() => this.forgotPasswordButtonPress()}>Forgot password?</Text>
                        <Text style={styles.links}>Register</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
