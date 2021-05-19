import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const { REACT_APP_MY_API } = process.env;

if (!firebase.apps.length) {
  var firebaseConfig = firebase.initializeApp({
    apiKey: REACT_APP_MY_API,
    authDomain: "delta-hacks-306802.firebaseapp.com",
    databaseURL: "https://delta-hacks-306802-default-rtdb.firebaseio.com",
    projectId: "delta-hacks-306802",
    storageBucket: "delta-hacks-306802.appspot.com",
    messagingSenderId: "492509732785",
    appId: "1:492509732785:web:b2dd27a98ccb5468d92790",
  });
} else {
  firebaseConfig = firebase.app();
}

export const auth = firebase.auth;
export const data = firebaseConfig.database();
