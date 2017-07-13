import React from 'react';
import { Button, Container, Content, H1, Input, Item, Text } from 'native-base';
import { View } from 'react-native';
import globalStyles from '../../Globals/styles'

export default class ForgotPassword extends React.Component {
    render () {        
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.spacer}>
                        <H1 style={styles.header}>Forgot your password?</H1>
                        <Text style={styles.description}>Enter your email address below to continue</Text>
                        <Item regular style={styles.fieldWrapper}>
                            <Input style={styles.field}/>
                        </Item>
                        <Button block style={styles.button}><Text style={styles.buttonText}>Continue</Text></Button>
                    </View>
                </Content>
            </Container>
        )
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
    description: {
        fontSize: 18,
        marginBottom: 60,
    },
    field: {
        backgroundColor: '#fff',
    },
    fieldWrapper: {
        marginBottom: 20,
    },
    header: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    spacer: globalStyles.spacing.defaultSpacing,
}
