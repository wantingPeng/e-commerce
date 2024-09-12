import { USER_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  currentUser: null,
};

//diff from useReducer every singel reducer only receive individule diapatch, here we have root-reducer, actually action here will receive every like from cartReducer
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default: //every reducer receive evert action, so we might receive a action, which the type has nothing to do with our reducer
      //whenever we don't response to an action , like got dispatched from cart, then just return default state here, type from cart dont't match case here
      return state;
  }
};
