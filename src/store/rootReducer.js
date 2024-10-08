import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/userReducer";
import { CategoriesReducer } from "./Categories/CategoriesReducer";
import { cartReducer } from "./cart/cartReducer";

//root reducer,creat a final reducer by combining smaller reducer together
export const rootReducer = combineReducers({
  user: userReducer, //Each reducer manages a slice of your app's state. When you combine these reducers into a rootReducer,
  // Redux creates a state tree (a object contains every state objects from each reducer)
  // where each key represents the piece of state managed by its respective reducer.
  Categories: CategoriesReducer,

  cart: cartReducer,
});

/* 

state tree like:: // then got import in store.js
{
  "auth": {
    "isAuthenticated": false,
    "user": null
  },
  "todos": {
    "todos": []
  }
} */
