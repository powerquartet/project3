const firebase = require("firebase/app");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyAU2jIJq8y9pBkz_L3sgCK9Fl3e6-1ML1o",
    authDomain: "portion-crush.firebaseapp.com",
    databaseURL: "https://portion-crush.firebaseio.com",
    projectId: "portion-crush",
    storageBucket: "portion-crush.appspot.com",
    messagingSenderId: "461555846410"
};

firebase.initializeApp(config);
const auth = firebase.auth();

module.exports = {
    firebase,
    auth
}