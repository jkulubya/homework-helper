import axios from 'axios';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Container, Content, Input, Item, Text } from 'native-base';
import globalStyles from '../../Globals/styles'

export default class Login extends React.Component {
    constructor () {
        super ()
        this.state = {
            Username: '',
            Password: '',
            requestStatus: 'idle',
            jwt: '',
            succeeded: false,
        }
        this.loginButtonPress = this.loginButtonPress.bind(this)
    }
    render () {        
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
                                onChangeText={(text) => this.setState({Username: text})}
                                style={styles.field}
                                value={this.state.Username}
                            />
                        </Item>                    
                        <Text style={styles.labels}>Password</Text>
                        <Item style={styles.fieldWrapper} regular>
                            <Input
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({Password: text})}
                                secureTextEntry
                                style={styles.field}
                                value={this.state.Password}
                            />
                        </Item>
                        <Button block style={styles.button} onPress={() => this.loginButtonPress()}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </Button>
                        <Text style={styles.links}>Forgot password?</Text>
                        <Text style={styles.links}>Register</Text>
                    </View>
                </Content>
            </Container>
        )
    }

    loginButtonPress () {
        this.setState({requestStatus: 'waiting'})
        let payload = {
            Username: this.state.Username,
            Password: this.state.Password,
        }
        axios.post('http://10.0.2.2:5000/api/auth/login', payload)
            .then(response => {
                this.setState({jwt: response.data.auth_token, requestStatus: 'idle', succeeded: true})
            })
            .catch(error => {
                this.setState({requestStatus:'idle', succeeded: false})
            })
    }
}

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
}
