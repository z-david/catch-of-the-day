import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAinWuznyIuRlY1TyWdEWNoZ7GRZbGSjQo",
  authDomain: "catch-of-the-day-david-wible.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-david-wible-default-rtdb.firebaseio.com",
  //projectId: "catch-of-the-day-david-wible",
  //storageBucket: "catch-of-the-day-david-wible.appspot.com",
  //messagingSenderId: "718475835611",
  //appId: "1:718475835611:web:9cb107689f44ee5fd934fe",
  //measurementId: "G-PGPGL7V7KM"
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp};

export default base;