import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcZbwtnS6OiB8ThFvcNSKMgcPIWpfy4PU",
  authDomain: "chat-app-5d341.firebaseapp.com",
  projectId: "chat-app-5d341",
  storageBucket: "chat-app-5d341.appspot.com",
  messagingSenderId: "713599007670",
  appId: "1:713599007670:web:4c3d2e5d8c11f78302df17",
  measurementId: "G-5QYHBLDRBQ",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
