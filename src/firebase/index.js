import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5XjdoVJ8R6cyKHf-cGbmU3PSRMF9vCVc",
  authDomain: "task-management-1f3e2.firebaseapp.com",
  projectId: "task-management-1f3e2",
  storageBucket: "task-management-1f3e2.appspot.com",
  messagingSenderId: "154776214671",
  appId: "1:154776214671:web:384de32cb359a6e47424fa",
};

firebase.initializeApp(firebaseConfig);

const projectfirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectfirestore, projectAuth };
