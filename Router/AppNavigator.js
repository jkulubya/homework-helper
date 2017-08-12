import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from '../Views/Home';
import ViewQuestion from '../Views/ViewQuestion';
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
    },
    {
        initialRouteName: 'Index',
        navigationOptions: {
            headerStyle: styles.header,
        },
    },
);

export default AppNavigator;
