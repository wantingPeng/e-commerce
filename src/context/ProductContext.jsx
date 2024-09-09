import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  PRODUCTS: [],
  product: "",
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [product, setProduct] = useState("");

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
