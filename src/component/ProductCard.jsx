import Button from "./Button";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/cart/cartAktion";
import { selcteCartItems } from "../store/cart/cartSelector";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const dispatch = useDispatch();
  const cartList = useSelector(selcteCartItems);
  function addProductToCart() {
    dispatch(addItemToCart(cartList, product));
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button
        buttonType="inverted"
        buttonContent="Add to card"
        onClick={addProductToCart}
      ></Button>
    </div>
  );
};

export default ProductCard;
