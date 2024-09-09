import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./CheckOutItem.scss";
const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeCartFromItem, deleteCartItem } =
    useContext(CartContext);

  const increament = () => addItemToCart(cartItem);
  const decreament = () => removeCartFromItem(cartItem);
  const deleteItem = () => deleteCartItem(cartItem);

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
