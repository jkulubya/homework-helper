import axios from 'axios';
import { action, computed, observable } from 'mobx';
import jwtDecode from 'jwt-decode';

class UserStore {
    @observable Id = ''
    @observable Token = ''
    @computed get IsLoggedIn() {
        let IsLoggedIn = false;
        if (this.Token.length === 0) return IsLoggedIn;

        const currentTime = Math.round(new Date().getTime() / 1000);
        const decoded = jwtDecode(this.Token);

        if (currentTime < decoded.exp) IsLoggedIn = true;
        return IsLoggedIn;
    }
}

class Store {
    @observable User = new UserStore()

    @action LoginUser = (userName, password) => {
        const payload = {
            Username: userName,
            Password: password,
        };
        axios.post('http://10.0.2.2:5000/api/auth/login', payload)
            .then((response) => {
                this.User.Token = response.data.auth_token;
            })
            .catch(() => {
            });
    }
}

export default new Store();
