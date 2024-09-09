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

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartList, setCartList }}
    >
      {children}
    </CartContext.Provider>
  );
};
