import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqSLAQlUBpjSdGVV--55bpWwC1sYhTqsU",
  authDomain: "netflix-b0893.firebaseapp.com",
  projectId: "netflix-b0893",
  storageBucket: "netflix-b0893.appspot.com",
  messagingSenderId: "828782392324",
  appId: "1:828782392324:web:ae4f230d758cda4711f151",
  measurementId: "G-LHDF3V3V46",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
