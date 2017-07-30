import { observable, action } from 'mobx';
import RootNavigator from '../Router/RootNavigator';

export default class NavigationStore {
    @observable.ref state = {
        index: 0,
        routes: [
            {
                key: 'Login',
                routeName: 'Login',
                params: { title: 'Login' },
            },
        ],
    }

    @action dispatch = (action, stackNavState = true) => { // eslint-disable-line
        const previousNavState = stackNavState ? this.navigationState : null;
        this.state = RootNavigator
            .router
            .getStateForAction(action, previousNavState);
        return this.state;
    }
}
