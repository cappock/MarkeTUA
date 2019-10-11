import React, { Component } from 'react';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';
const provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {
    constructor() {
        super();
        this.state = ({
            userCredentials: null,
            userLoged:null
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
                this.setState({ userLoged:user });
                var userCredentials={
                    "user":user.email.split("@")[0],
                    "idtoken":user.uid
                }
                localStorage.setItem('userCredentials',JSON.stringify(userCredentials));
            } else {
                this.setState({ userLoged: null });
                localStorage.removeItem('userCredentials');
            }
        });
    }
   
    signout(e) {
        e.preventDefault();
        firebaseConfig.auth().signOut();

    }
    signup(e) {
        e.preventDefault();
        firebaseConfig.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var userp = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode)
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });
    }
    render() {
        return (
            <div>
                <div>{this.state.userLoged ? (
                <button onClick={this.signout} >Cerrar Sesión</button>
                ) : (
                <button onClick={this.signup}>Iniciar con Google</button>
                )}</div>
            </div>
        );
    }
}
export default Login;