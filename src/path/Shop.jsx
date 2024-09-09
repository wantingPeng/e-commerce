import { ProductsContext } from "../context/ProductContext";
import { useContext } from "react";
import ProductCard from "../component/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
