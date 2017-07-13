import React from 'react';
import { Button, Container, Content, H1, H2, Input, Item, Text } from 'native-base';
import globalStyles from '../../Globals/styles'

export default class ViewQuestion extends React.Component {
    render () {        
        return (
            <Container style={styles.container}>
                <Content>
                    <H1>How do you complete the squares?</H1>
                    <H2>Answer</H2>
                    <Text>prinellm</Text>
                    <Text>2 years ago</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...</Text>
                </Content>
            </Container>
        )
    }
}

const styles = {
    ...globalStyles
}
