import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFzrJt32U05a_Z8YH96ifjVeE34QbxEgM",
    authDomain: "todo-48a86.firebaseapp.com",
    databaseURL: "https://todo-48a86.firebaseio.com",
    projectId: "todo-48a86",
    storageBucket: "todo-48a86.appspot.com",
    messagingSenderId: "19556094913",
    appId: "1:19556094913:web:8df7a4aaba46e82e411540"
};

// firebase.firestore().settings({ timestampsInSnapshots: true })
// firebase.initializeApp(config)


export const Firebase = firebase.initializeApp(config);

export const db = Firebase.firestore();
export const auth = firebase.auth();