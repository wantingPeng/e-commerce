import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualCategoryPage.scss";
import { selectCategories } from "../store/Categories/CategoriesSelector";
import { useSelector } from "react-redux";

const IndividualCategoryPage = () => {
  const Categories = useSelector(selectCategories);

  const { title } = useParams();
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
