import React from 'react';
import { Container, Content, H1, H2, Text } from 'native-base';
import { View } from 'react-native';
import globalStyles from '../../Globals/styles';

const styles = {
    answerText: {
        color: globalStyles.colors.primaryColor,
        fontSize: 18,
    },
    container: {
        ...globalStyles.container,
    },
    questionTitle: {
        color: globalStyles.colors.primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
    },
    spacer: globalStyles.spacing.defaultSpacing,
    subtitle: {
        color: globalStyles.colors.primaryColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
};

export default class ViewQuestion extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.spacer}>
                        <H1 style={styles.questionTitle}>How do you complete the squares?</H1>
                        <H2 style={styles.subtitle}>Answer</H2>
                        <Text>prinellm</Text>
                        <Text>2 years ago</Text>
                        <Text style={styles.answerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...
                        </Text>
                        <Text style={styles.answerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...
                        </Text>
                        <Text style={styles.answerText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc a dignissim arcu, vel dictum ex. Nunc nec justo lorem...
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
