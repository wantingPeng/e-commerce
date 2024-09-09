import Button from "./Button";
import "./ProductCard.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  function addProductToCart() {
    addItemToCart(product);
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
