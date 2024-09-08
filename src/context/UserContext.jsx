/* //useContext()=consider as a storage thing , allow you to share value between multiple levels of
//componernts without passing through each level

//provider component
//1 .import {creatContext} from 'react'
//2. export const SomeContext=creatContext;
//3.<SomeContext.provider value={value}> <child /> </SomeContext.provider >
// SomeContext.Provider lets you provide the context value to components.

//consumer component
//1.import react {useContext} from "react"
//2. import { SomeContext} from Component
//3 const value =useContext(SomeContext) */

import { createContext, useEffect, useState } from "react";
import { AuthStateChangedListener } from "../utils/firebase";
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: "",
}); /// create a context obj, every context obj have .provider

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  /* useEffect(() => {
    const unsubscribe = AuthStateChangedListener((user) => {
      //The user object in the onAuthStateChanged callback is automatically provided by Firebase.
      // When you call onAuthStateChanged, Firebase listens for authentication state changes and passes the current user's information as the user argument to the callback function.
      setCurrentUser(user);
    });
    return unsubscribe; // this is actually a function  when called, removes the listener
    //which will automatically be called by React when 1. The component is unmounted (i.e., removed from the DOM)
    //2.The effect needs to run again
  }, []);
 */
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
  //allow any child component are able to access to value={} directlly
};
