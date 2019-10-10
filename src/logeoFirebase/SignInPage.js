import React, { Component } from 'react';
import firebaseConfig from './firebaseConfig';
import Login from './Login';

class SignInpage extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            // <div>{this.state.user ? : (<Home />) : (<Login />)}</div>
            <Login></Login>
        )
    }
}

export default SignInpage;