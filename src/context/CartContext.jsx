import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartList: [],
  addItemToCart: () => {},
  cartItemCount: 0,
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
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartList.reduce(
      (accumulate, current) => accumulate + current.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartList]);

  const addItemToCart = (
    product //pass product in there
  ) => setCartList(addCartItem(cartList, product));

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartList,
        addItemToCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
