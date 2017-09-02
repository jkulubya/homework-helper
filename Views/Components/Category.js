import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const styles = {
    container: {
        backgroundColor: '#199ed8',
        borderRadius: 8,
        marginTop: 5,
        padding: 3,
        paddingRight: 5,
        paddingLeft: 5,
    },
    flexWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        color: '#fff',
    },
};

const Category = props => (
    <View style={styles.flexWrapper}>
        <View style={styles.container}>
            <Text style={styles.text}>{props.category}</Text>
        </View>
    </View>
);

export default Category;
