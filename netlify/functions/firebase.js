const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCHs79xUOJ8Tziwzq-41bz5EPR5Srvz0_k",
  authDomain: "kiei-451-285bc.firebaseapp.com",
  projectId: "kiei-451-285bc",
  storageBucket: "kiei-451-285bc.appspot.com",
  messagingSenderId: "961860795689",
  appId: "1:961860795689:web:667c73f556b89a6689cb38"
}// replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase