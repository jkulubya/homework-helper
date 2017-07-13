import React from 'react';
import { Button, Container, Content, H1, H2, Input, Item, Text } from 'native-base';
import globalStyles from '../../Globals/styles'

export default class ViewQuestion extends React.Component {
    render () {        
        return (
            <Container style={styles.container}>
                <Content>
                    <H1>How do you complete the squares?</H1>
                    <Text>jkulubya</Text>
                    <Text>2 years ago</Text>
                    <Text>Given a quadratic equation like a + b = c. How do I find the roots a and b?. And what is the rationale behind completeing the squares? Why does it work?</Text>
                    <Text>Grade</Text>
                    <Text>10</Text>
                    <Text>Subject</Text>
                    <Text>Mathematics</Text>
                    <H2>23 Answers</H2>
                    <Text>prinellm</Text>
                    <Text>2 years ago</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                    <Text></Text>
                    <Text>prinellm</Text>
                    <Text>2 years ago</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                    <Text>prinellm</Text>
                    <Text>2 years ago</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                </Content>
            </Container>
        )
    }
}

const styles = {
    ...globalStyles
}
