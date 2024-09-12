import { CART_ACTION_TYPES } from "./cartType";

export const setIsCartOpen = (cartState) => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  payload: cartState,
});

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

export const addItemToCart = (cartList, product) => {
  const updateCartItems = addCartItem(cartList, product);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: { cartList: updateCartItems },
  }; //or payload: {cartList:updateCartItems} then we can use ...payload in cartreducer.js
};

export const removeCartFromItem = (cartList, product) => {
  const updateCartItems = removeCartItem(cartList, product);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updateCartItems };
};
export const deleteCartItem = (cartList, product) => {
  const updateCartItems = clearItem(cartList, product);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updateCartItems };
};
