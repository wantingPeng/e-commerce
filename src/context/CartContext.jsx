import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartList: [],
  setCartList: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  setCartList = (product) => {
    const existingCartItem = cartList.find(
      (cartitem) => cartitem.id === product.id
    );
    if (existingCartItem)
      return [
        ...cartList,
        { ...existingCartItem, quantity: existingCartItem.quantity + 1 },
      ];

    return [...cartList, { ...product, quantity: 1 }];
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartList, setCartList }}
    >
      {children}
    </CartContext.Provider>
  );
};
