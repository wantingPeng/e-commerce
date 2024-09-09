import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartList: [],
  addItemToCart: () => {},
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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const addItemToCart = (
    product //pass product in there
  ) => setCartList(addCartItem(cartList, product));

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartList, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
