import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDQ4YDAtPhkkBIu0TWRBnAi-bpBYFjmojM",
    authDomain: "marketua-b6b26.firebaseapp.com",
    databaseURL: "https://marketua-b6b26.firebaseio.com",
    projectId: "marketua-b6b26",
    storageBucket: "marketua-b6b26.appspot.com",
    messagingSenderId: "1094856102481",
    appId: "1:1094856102481:web:b399d72cb5102ff9b0de70",
    measurementId: "G-T865GDBV12"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;