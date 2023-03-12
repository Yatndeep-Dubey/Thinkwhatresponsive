const firebase= require("firebase/app")
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyB2jnozl1QxGZdUPpLtgDKtFfzwHV-TXYM",
    authDomain: "nodepractise-b1f94.firebaseapp.com",
    projectId: "nodepractise-b1f94",
    storageBucket: "nodepractise-b1f94.appspot.com",
    messagingSenderId: "745837555435",
    appId: "1:745837555435:web:5e96f65669b2759c46d8ae",
    measurementId: "G-TNR82XM9C0"
  };
firebase.initializeApp(firebaseConfig);
module.exports=firebase;