const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="quantity">{quantity}</div>
    </div>
  );
};

export default CartItem;
