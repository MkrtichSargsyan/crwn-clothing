import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB7-ouM8qdQJY4CzeCTV20y_WrH5witkoc',
  authDomain: 'crwn-db-5007c.firebaseapp.com',
  projectId: 'crwn-db-5007c',
  storageBucket: 'crwn-db-5007c.appspot.com',
  messagingSenderId: '38754309222',
  appId: '1:38754309222:web:eb081733a78c084ba549a7',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // path

  const snapShot = await userRef.get(); // actual user

  if (!snapShot.exists) {
    //not exist
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const addCollectionAndDocuments = (collectinKey, objectsToAdd)=>{
  const collectinRef = firestore.collection(collectinKey)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
