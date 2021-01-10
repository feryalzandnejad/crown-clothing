import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnxUhhKOeN9BT_BncTKvEbE-j2v0O8iYU",
    authDomain: "crwn-db-e1541.firebaseapp.com",
    projectId: "crwn-db-e1541",
    storageBucket: "crwn-db-e1541.appspot.com",
    messagingSenderId: "510322653304",
    appId: "1:510322653304:web:1a73ca00f4d495f3d0158d",
    measurementId: "G-P54WX2TCHL"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
         console.log('error creating user', error.message);
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