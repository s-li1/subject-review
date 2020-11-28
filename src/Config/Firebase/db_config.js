import firebase from 'firebase/app';
import 'firebase/firestore';

const DB_CONFIG = {
    apiKey: "AIzaSyAUzySy9ffhBLoj8OKGo831T_o_R2z1Bnw",
    authDomain: "review-crud.firebaseapp.com",
    databaseURL: "https://review-crud.firebaseio.com",
    projectId: "review-crud",
    storageBucket: "review-crud.appspot.com",
    messagingSenderId: "691145998257",
    appId: "1:691145998257:web:cf6f545e632214a35cc790"
};

//remove this later
//adds firebase to console window for us to test things
window.firebase = firebase; 

firebase.initializeApp(DB_CONFIG);

export const firestore = firebase.firestore();

export default firebase;