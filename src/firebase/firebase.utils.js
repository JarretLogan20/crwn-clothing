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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exits) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;