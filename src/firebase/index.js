import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={

        apiKey: "AIzaSyDRC4XehzTlZSDCODdfghMLsfXPTOSUgxgu0Rg",
        authDomain: "redwire-619bc.firebaseapp.com",
        projectId: "redwire-619bc",
        storageBucket: "redwire-619bc.appspot.com",
        messagingSenderId: "1042930250952",
        appId: "1:1042930250952:web:6888132c31ef237c98e1fd",
        measurementId: "G-SKFYXWHVSX"
      
}

firebase.initializeApp(config);

const DB = firebase.firestore();
const usersCollection = DB.collection('users');
const articlesCollection = DB.collection('articles');

export {
    firebase,
    usersCollection,
    articlesCollection
}