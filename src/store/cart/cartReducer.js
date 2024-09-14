import { createSlice } from "@reduxjs/toolkit";

function addCartItem(cartList, product) {
  const existingCartItem = cartList.find(
    (cartitem) => cartitem.id === product.id
  );
  if (existingCartItem) {
    return cartList.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //correct list
        : cartItem
    );
  }

  return [...cartList, { ...product, quantity: 1 }]; //append list
}

function removeCartItem(cartList, product) {
  return cartList.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } //correct list
      : cartItem
  );
}
function clearItem(cartList, product) {
  return cartList.filter((cartItem) => cartItem.id !== product.id);
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartList: [],
  cartItemCount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartList = addCartItem(state.cartList, action.payload);
    },
    removeCartFromItem(state, action) {
      state.cartList = removeCartItem(state.cartList, action.payload);
    },
    deleteCartItem(state, action) {
      state.cartList = clearItem(state.cartList, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});
export const {
  addItemToCart,
  removeCartFromItem,
  deleteCartItem,
  setIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
/* export const cartReducer = (state = INITIAL_STATE, action) => {
  //reducer: A function that determines the next state based on the current state and the action dispatched.
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, //pass isCartOpen
        ...payload,
        /* cartList: payload,  //pass cartList cartItemCount total
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
