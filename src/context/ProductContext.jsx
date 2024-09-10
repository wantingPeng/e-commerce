import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../AllShopData";
import { addCollectionAndDoc } from "../utils/firebase";

export const ProductsContext = createContext({
  PRODUCTS: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionAndDoc("categorise", PRODUCTS); //(customize name of collecIdentifer, pass objects,what's we want to add in firestore)
  }, []);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
