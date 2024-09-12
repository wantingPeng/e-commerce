import Button from "./Button";
import "./CartDropDown.scss";
import CartItem from "./CartItem";
import { selcteCartItems } from "../store/cart/cartSelector";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const cartList = useSelector(selcteCartItems);
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
