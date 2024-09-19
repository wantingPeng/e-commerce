import { createSelector } from "reselect";
import { userSTATE } from "./userReducer";
import { rootState } from "../store";

export const SelctorCurrentUser = (state: rootState) => state.user.currentUser; //state come from state tree in store

export const user = (state: rootState): userSTATE => state.user;

export const selectCurrentUser = createSelector(
  user,
  (user) => user.currentUser
);
