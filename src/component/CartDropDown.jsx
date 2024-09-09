import Button from "./Button";
import "./CartDropDown.scss";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartList } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkOut");
  };

  return (
    <div className="cart-dropdown-container">
      {cartList.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="cart-items" />
      <Button onClick={handleCheckoutClick} buttonContent={"CHECKOUT"} />
    </div>
  );
};

export default CartDropDown;
