import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualCategoryPage.scss";
import {
  selectCategories,
  selectIsLoading,
} from "../store/Categories/CategoriesSelector";
import { useSelector } from "react-redux";
import Spinner from "../component/Spinner";

type CategoryRouteParams = {
  title: string;
};

const IndividualCategoryPage = () => {
  const Categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const { title } = useParams() as CategoryRouteParams;
  const [products, setProducts] = useState(Categories[title]); //products's default is {} not undefined
  /*   const products = Categories[title];
   */
  console.log(title);
  useEffect(() => {
    console.log("bobobo");
    setProducts(Categories[title]);
  }, [title, Categories]);

  console.log(Categories);
  console.log(Categories[title]);
  console.log(products);

  return (
    <>
      <h2 className="category-title">{title.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products && // fixed error : products is undefined, no products,don't do products.map
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default IndividualCategoryPage;
