import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyB_QYWRlQBj-odpCshvJUW54GIjXmUzdVE',
    authDomain: 'crwn-db-9521b.firebaseapp.com',
    databaseURL: 'https://crwn-db-9521b.firebaseio.com',
    projectId: 'crwn-db-9521b',
    storageBucket: 'crwn-db-9521b.appspot.com',
    messagingSenderId: '461522848681',
    appId: '1:461522848681:web:40bd017984621ea32d12b8',
    measurementId: 'G-MGWGW1R5FM'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;