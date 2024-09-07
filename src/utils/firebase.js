import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth"; //creat auth instance
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
