import "./CheckOut.scss";
import CheckOutItem from "../component/CheckOutItem";
import { useSelector } from "react-redux";

import { selcteCartItems, selcteCartTotal } from "../store/cart/cartSelector";

const CheckOut = () => {
  const cartList = useSelector(selcteCartItems);
  const total = useSelector(selcteCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartList.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

export default CheckOut;
