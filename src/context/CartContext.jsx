import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartList: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  removeCartFromItem: () => {},
  deleteCartItem: () => {},
  total: 0,
});
const INITIAL_STATE = {
  isCartOpen: false,
  cartList: [],
  cartItemCount: 0,
  total: 0,
};

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
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const cartReducer = (state, action) => {
  //reducer: A function that determines the next state based on the current state and the action dispatched.
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state, //pass isCartOpen
        ...payload, //pass cartList cartItemCount total
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state, //pass cartList cartItemCount total
        isCartOpen: payload, //pass isCartOpen
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  /*   const [state, dispatch] = useReducer();
   */
  const [{ isCartOpen, cartList, cartItemCount, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartList) => {
    const NewCount = newCartList.reduce((accumulate, current) => {
      return accumulate + current.quantity;
    }, 0);

    const newTotal = newCartList.reduce(
      (accumulate, current) => accumulate + current.price * current.quantity,
      0
    );
    dispatch({
      //dispatch: A function that you call to send an action to the reducer.
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartList: newCartList,
        cartItemCount: NewCount,
        total: newTotal,
      },
    });
  };

  const addItemToCart = (product) =>
    updateCartItemsReducer(addCartItem(cartList, product));

  const removeCartFromItem = (product) =>
    updateCartItemsReducer(removeCartItem(cartList, product));

  const deleteCartItem = (product) =>
    updateCartItemsReducer(clearItem(cartList, product));

  const setIsCartOpen = (cartState) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: cartState }); //dispatch: A function that you call to send an action to the reducer.
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartList,
        addItemToCart,
        cartItemCount,
        removeCartFromItem,
        deleteCartItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
