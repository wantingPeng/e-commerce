import "./CheckOutItem.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeCartFromItem,
  deleteCartItem,
} from "../store/cart/cartAktion";
import { selcteCartItems } from "../store/cart/cartSelector";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const cartList = useSelector(selcteCartItems);

  const dispatch = useDispatch();

  const increament = () => dispatch(addItemToCart(cartList, cartItem));
  const decreament = () => dispatch(removeCartFromItem(cartList, cartItem));
  const deleteItem = () => dispatch(deleteCartItem(cartList, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreament}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increament}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
