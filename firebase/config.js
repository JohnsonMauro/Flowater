import firebase from 'firebase';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClu7rYMShX2Yy1xNhhIsl_aPw33XuBW2E",
  authDomain: "iot-ionic-3724a.firebaseapp.com",
  databaseURL: "https://iot-ionic-3724a.firebaseio.com",
  storageBucket: "iot-ionic-3724a.appspot.com"
};

const firebaseConnection = firebase.initializeApp(firebaseConfig);

export default {
    firebaseConnection
};