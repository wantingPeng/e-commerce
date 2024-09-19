import { Action } from "./action";
import { UnknownAction } from "redux";
import { UserData } from "../../utils/firebase";

const INITIAL_STATE: userSTATE = {
  currentUser: null,
};
export type userSTATE = {
  readonly currentUser: UserData | null;
};
//diff from useReducer every singel reducer only receive individule diapatch, here we have root-reducer, actually action here will receive every like from cartReducer
export const userReducer = (
  state = INITIAL_STATE,
  action = {} as UnknownAction
) => {
  if (Action.match(action)) return { ...state, currentUser: action.payload };
  return state;
};
