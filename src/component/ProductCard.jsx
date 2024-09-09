import Button from "./Button";
import "./ProductCard.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted" buttonContent="Add to card"></Button>
    </div>
  );
};

export default ProductCard;
