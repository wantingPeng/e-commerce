import { createSelector } from "reselect";

const selcteCartState = (state) => state.cart;

export const selcteCartItems = createSelector(
  [selcteCartState],
  (cart) => cart.cartList //return cartList
);
export const selcteCartIsOpen = createSelector(
  [selcteCartState],
  (cart) => cart.isCartOpen //return isCartOpen
);
export const selcteCartCount = createSelector(
  [selcteCartState],
  (
    cart //return Count
  ) =>
    cart.cartList.reduce((accumulate, current) => {
      return accumulate + current.quantity;
    }, 0)
);
export const selcteCartTotal = createSelector(
  [selcteCartState],
  (
    cart //return Total
  ) =>
    cart.cartList.reduce(
      (accumulate, current) => accumulate + current.price * current.quantity,
      0
    )
);
