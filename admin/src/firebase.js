import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApOZ3JJLUtPd-XwI3vZ-Dab3RrbH_UnC4",
  authDomain: "netflix-240ba.firebaseapp.com",
  projectId: "netflix-240ba",
  storageBucket: "netflix-240ba.appspot.com",
  messagingSenderId: "4145607770",
  appId: "1:4145607770:web:20886c8ed6a47c0f03d463",
  measurementId: "G-Z5W07WD6NR",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
