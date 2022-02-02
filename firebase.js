import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// this is the firebase config and it just intializes our app, later we can put these fields
// in a env file so the values are secured.
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCzj8NXp6AdWVlg63iAtyQ5pcz2EV6MWnc",
    authDomain: "ricetta-4e80c.firebaseapp.com",
    projectId: "ricetta-4e80c",
    storageBucket: "ricetta-4e80c.appspot.com",
    messagingSenderId: "736924389520",
    appId: "1:736924389520:web:03768f31ecc9bb48964815",
  });
}

const auth = firebase.auth(); // this for authentication and creating users
const storage = firebase.firestore(); // this is for saving images or videos in the storage if needed
// const provider = new firebase.auth.GoogleAuthProvider();

// exporting these three objects so when you import you can import either one of these objects by destructing
export { auth, storage };
