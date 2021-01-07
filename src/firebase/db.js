import firebase from 'firebase/app'
import 'firebase/firestore'
//Paste in your firebase config we copied from the last step
var firebaseConfig = {
    apiKey: "AIzaSyDauzz6IWav765i_HI5i-ipuJy5ZCdruRg",
    authDomain: "honzi-42784.firebaseapp.com",
    databaseURL: "https://honzi-42784-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "honzi-42784",
    storageBucket: "honzi-42784.appspot.com",
    messagingSenderId: "415929243427",
    appId: "1:415929243427:web:e8d08e62b8513e244f1e96",
    measurementId: "G-RSLL8DT62S"
};
// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
