import ProductCard from "../component/ProductCard";
import { CategoriesContext } from "../context/CategoriesContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualCategoryPage.scss";

const IndividualCategoryPage = () => {
  const { title } = useParams();
  const { Categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(Categories[title]); //products's default is {} not undefined
  /*   const products = Categories[title];
   */

  useEffect(() => {
    setProducts(Categories[title]);
  }, [title, Categories]);

  return (
    <>
      <h2 className="category-title">{title.toUpperCase()}</h2>
      <div className="category-container">
        {products && // fixed error : products is undefined, no products,don't do products.map
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default IndividualCategoryPage;
