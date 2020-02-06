import * as firebase from "firebase";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD5MIIyMLV4ZDPLdVuKm8id4_kHpn9PGKo",
    authDomain: "recuitment-system.firebaseapp.com",
    databaseURL: "https://recuitment-system.firebaseio.com",
    projectId: "recuitment-system",
    storageBucket: "recuitment-system.appspot.com",
    messagingSenderId: "136888016983",
    appId: "1:136888016983:web:2362e31bbbd4dd931d4312",
    measurementId: "G-3PM25F3RT1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();