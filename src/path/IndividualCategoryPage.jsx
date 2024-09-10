import ProductCard from "../component/ProductCard";
import { CategoriesContext } from "../context/CategoriesContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "./IndividualCategoryPage.scss";

const IndividualCategoryPage = () => {
  const { title } = useParams();
  const { Categories } = useContext(CategoriesContext);

  const products = Categories[title];
  return (
    <>
      <h2 className="category-title">{title.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default IndividualCategoryPage;
