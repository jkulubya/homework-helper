import { StackNavigator } from 'react-navigation';
import AskQuestion from '../Views/AskQuestion';

const AppNavigator = StackNavigator(
    {
        Index: { screen: AskQuestion },
        // Search: { screen: Search }
    },
    {
        initialRouteName: 'Index',
        navigationOptions: ({ navigation: { state } }) => ({
            title: state.params && state.params.title,
        }),
    },
);

export default AppNavigator;
