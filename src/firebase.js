// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCwzn09XIyrpZMSRxW7GMNPwiYTvrnKvRw",
//     authDomain: "todo-app-fcedb.firebaseapp.com",
//     projectId: "todo-app-fcedb",
//     storageBucket: "todo-app-fcedb.appspot.com",
//     messagingSenderId: "1080332269697",
//     appId: "1:1080332269697:web:caeaf1b47e50ba8b877580",
//     measurementId: "G-9D3H66Z1TG"
//   };

import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        apiKey: "AIzaSyCwzn09XIyrpZMSRxW7GMNPwiYTvrnKvRw",
        authDomain: "todo-app-fcedb.firebaseapp.com",
        projectId: "todo-app-fcedb",
        storageBucket: "todo-app-fcedb.appspot.com",
        messagingSenderId: "1080332269697",
        appId: "1:1080332269697:web:caeaf1b47e50ba8b877580",
        measurementId: "G-9D3H66Z1TG"


});
const db = firebaseApp.firestore();

export default db;