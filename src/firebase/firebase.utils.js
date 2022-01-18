import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCh5MvDzn8zdgfKkSgJI6c_WZck46qo9eM",
    authDomain: "react-shop-f991f.firebaseapp.com",
    projectId: "react-shop-f991f",
    storageBucket: "react-shop-f991f.appspot.com",
    messagingSenderId: "1007603126500",
    appId: "1:1007603126500:web:7fdb592a272f97a7e85cf1"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  
  if(!userAuth){
    return;
  }

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 if(!snapShot.exists){

  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try{

    await userRef.set({
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


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;