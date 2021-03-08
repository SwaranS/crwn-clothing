import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXYIIgwEbhRtdkfgeUXskdNikScHbj9AY",
  authDomain: "crwn-db-66fa7.firebaseapp.com",
  projectId: "crwn-db-66fa7",
  storageBucket: "crwn-db-66fa7.appspot.com",
  messagingSenderId: "274466132255",
  appId: "1:274466132255:web:863d95784fe0560084a02a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
