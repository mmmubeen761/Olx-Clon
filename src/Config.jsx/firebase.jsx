import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBokNQnh1tGF3epvTv2eYrIj4IZW_9VxCM",
    authDomain: "olx-clon.firebaseapp.com",
    databaseURL: "https://olx-clon.firebaseio.com",
    projectId: "olx-clon",
    storageBucket: "olx-clon.appspot.com",
    messagingSenderId: "862408404133",
    appId: "1:862408404133:web:ffcddca09d7bbcb790f14c",
    measurementId: "G-85SHR6YB7B"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export  {
  storage, firebase as default
}