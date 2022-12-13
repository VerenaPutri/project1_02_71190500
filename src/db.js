import * as firebase from "firebase/app";
import "firebase/database";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config ={
  apiKey: "AIzaSyAbH8dM46V_Mz98aabxQqykEVX6TWzGfgo",

  authDomain: "projectvue71190500.firebaseapp.com",

  projectId: "projectvue71190500",

  storageBucket: "projectvue71190500.appspot.com",

  messagingSenderId: "1068119817767",

  appId: "1:1068119817767:web:014ca3a789cd4a3f4f9802",




}

const db= firebase.initializeApp(config);

export default db;
