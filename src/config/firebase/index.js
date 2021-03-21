import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAUcdCTZj5ydAJAndWx9TzJWz9kyQ3Limw",
    authDomain: "aplus-spv.firebaseapp.com",
    projectId: "aplus-spv",
    storageBucket: "aplus-spv.appspot.com",
    messagingSenderId: "1080424699555",
    appId: "1:1080424699555:web:a22aef679dbbe963679116",
    measurementId: "G-XWL4GZXHJE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;