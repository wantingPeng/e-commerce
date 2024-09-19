import { CART_ACTION_TYPES, CartItem } from "./cartType";
import { setIsCartOpen, setCartItems } from "./cartAktion";
import { UnknownAction } from "redux";

export type CartState = {
  isCartOpen: boolean;
  cartList: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartList: [],
};

export const cartReducer = (state = INITIAL_STATE, action: UnknownAction) => {
  //reducer: A function that determines the next state based on the current state and the action dispatched.
  if (setCartItems.match(action)) {
    return {
      ...state, //pass isCartOpen
      cartList: action.payload,
    };
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state, //pass cartList cartItemCount total
      isCartOpen: action.payload, //pass isCartOpen
    };
  }
  return state;
};

/*   switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, //pass isCartOpen
        ...payload,
        /* cartList: payload, //pass cartList cartItemCount total
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state, //pass cartList cartItemCount total
        isCartOpen: payload, //pass isCartOpen
      };
    default:
      return state;
  }
}; */
