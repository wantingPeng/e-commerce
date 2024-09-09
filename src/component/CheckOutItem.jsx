import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeCartFromItem } = useContext(CartContext);

  const increament = () => addItemToCart(cartItem);
  const decreament = () => removeCartFromItem(cartItem);

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={decreament}>
          &#10094;
        </div>
        <div className="arrow" onClick={increament}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
