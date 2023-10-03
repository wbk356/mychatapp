import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBMRiqp4EfXmBVkF7kMEBabShMxv74A7E",
    authDomain: "mychatapp356.firebaseapp.com",
    projectId: "mychatapp356",
    storageBucket: "mychatapp356.appspot.com",
    messagingSenderId: "473389750165",
    appId: "1:473389750165:web:4193d0c376afb24e78c89c",
    measurementId: "G-62WJB4LBJ7"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }