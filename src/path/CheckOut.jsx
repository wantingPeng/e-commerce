import "./CheckOut.scss";
import CheckOutItem from "../component/CheckOutItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CheckOut = () => {
  const { cartList } = useContext(CartContext);

  return (
    <div>
      {cartList.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CheckOut;
