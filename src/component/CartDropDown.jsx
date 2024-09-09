import Button from "./Button";
import "./CartDropDown.scss";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const CartDropDown = () => {
  const { cartList } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartList.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="cart-items" />
      <Button buttonContent={"GO TO CHECKOUT"} />
    </div>
  );
};

export default CartDropDown;
