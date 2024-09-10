import { CategoriesContext } from "../context/CategoriesContext";
import { useContext } from "react";
import CategorisePreview04 from "../component/CategorisePreview04";

const CategoriesPreviewPage = () => {
  const { Categories } = useContext(CategoriesContext);

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
