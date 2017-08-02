import { StackNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import Login from '../Views/Login';
import ForgotPassword from '../Views/ForgotPassword';

const RootNavigator = StackNavigator(
    {
        Login: { screen: Login },
        ForgotPassword: { screen: ForgotPassword },
        AppNavigator: { screen: AppNavigator },
    },
    {
        headerMode: 'none',
    },
);

export default RootNavigator;
