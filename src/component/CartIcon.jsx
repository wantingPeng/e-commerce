import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./CartIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItemCount } = useContext(CartContext);

  function handleCartState() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container" onClick={handleCartState}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
