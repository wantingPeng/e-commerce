import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../store/cart/cartReducer";
import { selcteCartIsOpen, selcteCartCount } from "../store/cart/cartSelector";

import "./CartIcon.scss";

const CartIcon = () => {
  const cartItemCount = useSelector(selcteCartCount);
  const isCartOpen = useSelector(selcteCartIsOpen);

  const dispatch = useDispatch();

  function handleCartState() {
    dispatch(setIsCartOpen(!isCartOpen));
  }
  return (
    <div className="cart-icon-container" onClick={handleCartState}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
