import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const DB_CONFIG = {
    apiKey: "AIzaSyAUzySy9ffhBLoj8OKGo831T_o_R2z1Bnw",
    authDomain: "review-crud.firebaseapp.com",
    databaseURL: "https://review-crud.firebaseio.com",
    projectId: "review-crud",
    storageBucket: "review-crud.appspot.com",
    messagingSenderId: "691145998257",
    appId: "1:691145998257:web:cf6f545e632214a35cc790"
};

firebase.initializeApp(DB_CONFIG);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
        console.log(res.user);

    }).catch((error)=> {
        console.log(error.message);
    });
}
export default firebase;