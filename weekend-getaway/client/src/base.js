import   firebase from "firebase/app";
import "firebase/auth";

console.log(firebase)
console.log(firebase.auth)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  });
  export const auth = firebase.auth();
export default app;

