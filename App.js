import Expo from 'expo';
import React from 'react';
import { observer } from 'mobx-react';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './Router/RootNavigator';
import NavigationStore from './Store/NavigationStore';

@observer
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isReady: false,
        };
        this.store = new NavigationStore();
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (<RootNavigator navigation={addNavigationHelpers({
            dispatch: this.store.dispatch,
            state: this.store.state,
        })}
        />);
    }
}
