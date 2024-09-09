import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartList: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  removeCartFromItem: () => {},
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
  console.log(cartList);
  return cartList.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } //correct list
      : cartItem
  );
}
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartList.reduce(
      (accumulate, current) => accumulate + current.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartList]);

  const addItemToCart = (product) =>
    setCartList(addCartItem(cartList, product));

  const removeCartFromItem = (product) =>
    setCartList(removeCartItem(cartList, product));

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartList,
        addItemToCart,
        cartItemCount,
        removeCartFromItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
