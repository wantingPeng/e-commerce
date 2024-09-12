import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"; //creat auth instance

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"; //doc: retrieve documents inside of firestore ,getDoc: get data in document, setDoc: set date in document
const firebaseConfig = {
  apiKey: "AIzaSyB9gN0bAh_DGYxSkJWolxEHZpVkJm1iKws",

  authDomain: "e-commerce-e1919.firebaseapp.com",

  projectId: "e-commerce-e1919",

  storageBucket: "e-commerce-e1919.appspot.com",

  messagingSenderId: "142900134806",

  appId: "1:142900134806:web:0a85f1249451c6c13393b7",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig); // we creat a firebase in firebase app, here we instance it in our code, and then allow us to interact with firebase

const provider = new GoogleAuthProvider(); //initialize a provider instance //we can have github, facebook,passwordEmail, and so on diff provider
provider.setCustomParameters({
  prompt: "select_account", // if visitor use googelProvider, then we always force them to select a googel account, different provider request different config, 'select account' is just what googelprovider request
}); //tell what we want the GoogleAuthProvider to behave

export const auth = getAuth(); // export and creat instance of authentication // diration the lifecicle of application ,authentication represent always one person
export const signInWithGoogelPopup = () => signInWithPopup(auth, provider); //pass auth and provider instance what we just generated

export const db = getFirestore(); //instantiated firestore, use it to access our database

export const creatUserDocFromAuth = async (userAuth, optionArgument = {}) => {
  // set ={} just in case more addition arguments get passed in , then we can put all extra arguments in a object {} and pass in together
  if (!userAuth) return;
  // userAuth: response from 'const response = await signInWithGoogelPopup();'
  //first if there is an existing doc reference

  const userDocRef = doc(db, "User", userAuth.uid); //paramenters database, collection(name the collection),identifer(unique id )
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists()); // whether userDocRef in firestore exist
  // first check if 'userDocRef' exist, if yes, return 'userDocRef', if no setDoc use  data from 'userAuth'
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt, // pass those info to userDocRef
        ...optionArgument,
      });
    } catch (error) {
      console.log("error creating the userAuth", error.message);
    }
  }
  return userDocRef; // and
};

// createUserWithEmailAndPassword: native provider
export const creatUserDocFromEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password); //authentication and return a response exactlly like what returned in "logGoogelUserPopUp"
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password); //authentication and return a response exactlly like what returned in "logGoogelUserPopUp"
};

export const SignOut = async () => await signOut(auth);

export const AuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDoc = async (collecIdentifer, objects) => {
  //object:data object, which we want to add

  const collecRef = collection(db, collecIdentifer); //goal:store objects in collecReferance as a new doc
  const batch = writeBatch(db); // group multiple write operations (like set, update, or delete) into a single atomic operation.
  //here we'll creat a bunch of creat events, cause each of object like, i want you to creat and set me to into collectionReferance as a new doc
  objects.forEach((object) => {
    //for each of objects i want you to batch a set for me
    const docRef = doc(collecRef, object.title.toLowerCase()); //firestore point out a place, where we can store the unique object. like above userDocRef, but here instead of db, we already have collectionReferance,and the later stand for still unique identifer
    batch.set(docRef, object); // set data of object in location of docRef
  });
  await batch.commit(); // Commits the batch, applying all the operations atomically. If any operation fails, none of them will be applied.
  console.log("done");
};
export const getCollectionAndDocFromDB = async (collecIdentifer) => {
  const collecRef = collection(db, collecIdentifer); //hot the collecReference of collection
  const q = query(collecRef); //create a query by specifying the collection, which want to be queried
  const querySnapshot = await getDocs(q); // Executes the query and retrieves the documents.
  const collectionArray = querySnapshot.docs.map((obj) => obj.data()); //!!!!!Array(5) [ {…}, {…}, {…}, {…}, {…} ] in {}:items and title
  console.log(collectionArray);

  return collectionArray;
};
