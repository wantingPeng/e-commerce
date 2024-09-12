import { selectCategories } from "../store/Categories/CategoriesSelector";
import { useSelector } from "react-redux";
import CategorisePreview04 from "../component/CategorisePreview04";

const CategoriesPreviewPage = () => {
  const Categories = useSelector(selectCategories);
  return (
    <div>
      {Object.keys(Categories).map((title) => {
        const products = Categories[title];
        return (
          <CategorisePreview04 key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreviewPage;
