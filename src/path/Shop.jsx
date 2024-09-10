import { CategoriesContext } from "../context/CategoriesContext";
import { useContext } from "react";
import ProductCard from "../component/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { Categories } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {Object.keys(Categories).map((titles) =>
        Categories[titles].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Shop;
