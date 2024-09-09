import Button from "./Button";
import "./CartDropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      items
      <div className="cart-items" />
      <Button buttonContent={"GO TO CHECKOUT"} />
    </div>
  );
};

export default CartDropDown;
