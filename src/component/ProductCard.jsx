import Button from "./Button";
import "./ProductCard.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart/cartReducer";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const dispatch = useDispatch();
  function addProductToCart() {
    dispatch(addItemToCart(product));
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
