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

import { createContext, useState } from "react";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: "",
}); /// create a context obj, every context obj have .provider

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
  //allow any child component are able to access to value={} directlly
};
