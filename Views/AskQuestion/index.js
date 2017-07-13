import React from 'react';
import { Button, Container, Content, Input, Item, Text } from 'native-base';
import globalStyles from '../../Globals/styles'

export default class AskQuestion extends React.Component {
    render () {        
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>Grade</Text>
                    <Text>Subject</Text>
                    <Text>Question Title</Text>
                    <Item regular>
                        <Input />
                    </Item>                    
                    <Text>Description</Text>
                    <Item regular>
                        <Input multiline/>
                    </Item>  
                    <Text>Add attachment</Text>
                    <Button><Text>Submit Question</Text></Button>
                </Content>
            </Container>
        )
    }
}

const styles = {
    ...globalStyles
}
