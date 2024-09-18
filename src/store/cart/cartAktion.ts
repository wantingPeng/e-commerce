import { CART_ACTION_TYPES, CartItem } from "./cartType";
import { ActionWithPayload, createAction, withMatcher } from "../CreatAction";
import { CategoryItem } from "../Categories/CategoriesType";

function addCartItem(cartList: CartItem[], product: CategoryItem): CartItem[] {
  const existingCartItem = cartList.find(
    (cartitem) => cartitem.id === product.id
  );
  if (existingCartItem) {
    return cartList.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //correct list
        : cartItem
    );
  }

  return [...cartList, { ...product, quantity: 1 }]; //append list
}

function removeCartItem(
  cartList: CartItem[],
  product: CategoryItem
): CartItem[] {
  return cartList.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } //correct list
      : cartItem
  );
}
function clearItem(cartList: CartItem[], product: CategoryItem): CartItem[] {
  return cartList.filter((cartItem) => cartItem.id !== product.id);
}

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);
//"(boolean:boolean)=>createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)" just passen as parameter, it will be called in return

export const setCartItems = withMatcher(
  (cartList: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartList)
);

export const addItemToCart = (cartList: CartItem[], product: CategoryItem) => {
  const updateCartItems = addCartItem(cartList, product);
  return setCartItems(updateCartItems);
};

export const removeCartFromItem = (
  cartList: CartItem[],
  product: CategoryItem
) => {
  const updateCartItems = removeCartItem(cartList, product);
  return setCartItems(updateCartItems);
};
export const deleteCartItem = (cartList: CartItem[], product: CategoryItem) => {
  const updateCartItems = clearItem(cartList, product);
  return setCartItems(updateCartItems);
};
