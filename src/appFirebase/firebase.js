import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5k_gPXhQOGEvQydYMuhL2Wgy1UBNOt_o",
  authDomain: "azclone-c28e8.firebaseapp.com",
  projectId: "azclone-c28e8",
  storageBucket: "azclone-c28e8.appspot.com",
  messagingSenderId: "231907126748",
  appId: "1:231907126748:web:e9a64b2c5d3f572965f319",
  measurementId: "G-DCHK0EYPJB",
};
const app = initializeApp(firebaseConfig);
//const db = app.firestore();
const auth = getAuth(app);
const reg = createUserWithEmailAndPassword;
const updatename = updateProfile;
const signin = signInWithEmailAndPassword;
const manageuser = onAuthStateChanged;
const signout = signOut;
export { auth, reg, updatename, signin, manageuser, signout };
