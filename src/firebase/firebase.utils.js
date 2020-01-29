import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcMvfmNbSSrp05Q2vXuwWPkV5WNLD7IOs",
    authDomain: "crwn-db-6ba18.firebaseapp.com",
    databaseURL: "https://crwn-db-6ba18.firebaseio.com",
    projectId: "crwn-db-6ba18",
    storageBucket: "crwn-db-6ba18.appspot.com",
    messagingSenderId: "50991878942",
    appId: "1:50991878942:web:51e7784c682149b42aaf0f",
    measurementId: "G-7YL9TX24DQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  
  export default firebase;
