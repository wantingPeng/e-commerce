import { CART_ACTION_TYPES } from "./cartType";

const INITIAL_STATE = {
  isCartOpen: false,
  cartList: [],
  cartItemCount: 0,
  total: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  //reducer: A function that determines the next state based on the current state and the action dispatched.
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, //pass isCartOpen
        cartList: payload, //pass cartList cartItemCount total
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state, //pass cartList cartItemCount total
        isCartOpen: payload, //pass isCartOpen
      };
    default:
      return state;
  }
};
