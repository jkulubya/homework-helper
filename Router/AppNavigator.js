import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from '../Views/Home';
import AskQuestion from '../Views/AskQuestion';
import ViewQuestion from '../Views/ViewQuestion';
import PostAnswer from '../Views/PostAnswer';
import globalStyles from '../Globals/styles';

const styles = {
    header: {
        paddingTop: Expo.Constants.statusBarHeight,
        height: 56 + Expo.Constants.statusBarHeight,
        backgroundColor: globalStyles.colors.primaryColor,
    } };

const AppNavigator = StackNavigator(
    {
        Index: { screen: Home },
        Question: { screen: ViewQuestion },
        AskQuestion: { screen: AskQuestion },
        PostAnswer: { screen: PostAnswer },
    },
    {
        initialRouteName: 'Index',
        navigationOptions: {
            headerStyle: styles.header,
        },
    },
);

export default AppNavigator;
