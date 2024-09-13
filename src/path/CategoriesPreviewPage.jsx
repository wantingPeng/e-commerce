import {
  selectCategories,
  selectIsLoading,
} from "../store/Categories/CategoriesSelector";
import { useSelector } from "react-redux";
import CategorisePreview04 from "../component/CategorisePreview04";
import Spinner from "../component/Spinner";
const CategoriesPreviewPage = () => {
  const Categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(Categories).map((title) => {
          const products = Categories[title];
          return (
            <CategorisePreview04
              key={title}
              title={title}
              products={products}
            />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreviewPage;
