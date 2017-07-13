import React from 'react';
import { Button, Container, Content, H1, Input, Item, Text } from 'native-base';
import globalStyles from '../../Globals/styles'

export default class ForgotPassword extends React.Component {
    render () {        
        return (
            <Container style={styles.container}>
                <Content>
                    <H1>Forgot your password?</H1>
                    <Text>Enter your email address below to continue</Text>
                    <Item regular>
                        <Input />
                    </Item>
                    <Button><Text>Continue</Text></Button>
                </Content>
            </Container>
        )
    }
}

const styles = {
    ...globalStyles
}
