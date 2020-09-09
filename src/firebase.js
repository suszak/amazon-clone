import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5Jsp01SI0V_Hu0GHWHLxyucULB2Hjl68",
  authDomain: "challange-2d234.firebaseapp.com",
  databaseURL: "https://challange-2d234.firebaseio.com",
  projectId: "challange-2d234",
  storageBucket: "challange-2d234.appspot.com",
  messagingSenderId: "304483083348",
  appId: "1:304483083348:web:a154d2dc7de7091462f9c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
