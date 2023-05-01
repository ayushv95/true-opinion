import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBqFE963TwqifQ-0JLW0aS5j1WOJARAANE",
    authDomain: "true-opinion-d2334.firebaseapp.com",
    projectId: "true-opinion-d2334",
    storageBucket: "true-opinion-d2334.appspot.com",
    messagingSenderId: "963280610373",
    appId: "1:963280610373:web:0fbdfa32733205c60eaf2c",
    measurementId: "G-HC70FYW6RV"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()