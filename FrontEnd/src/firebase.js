import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJ7_jRkvoPRYEzzReGJ1BElvCfMQR8DQQ",
    authDomain: "gsetechnicaltest.firebaseapp.com",
    projectId: "gsetechnicaltest",
    storageBucket: "gsetechnicaltest.appspot.com",
    messagingSenderId: "425473828128",
    appId: "1:425473828128:web:13cfea939e344f91f2e345"
}

initializeApp(firebaseConfig)
const db = getFirestore()

export { db }