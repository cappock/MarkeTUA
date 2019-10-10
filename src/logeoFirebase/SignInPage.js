import React, { Component } from 'react';
import Login from './Login';

class SignInpage extends Component {
    render() {
        return (
            // <div>{this.state.user ? : (<Home />) : (<Login />)}</div>
            <Login></Login>
        )
    }
}

export default SignInpage;