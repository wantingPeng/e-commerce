import { Routes, Route } from "react-router-dom";
import IndividualCategoryPage from "./IndividualCategoryPage";
import CategoriesPreviewPage from "./CategoriesPreviewPage";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path="/:title" element={<IndividualCategoryPage />} />
    </Routes>
  );
};
export default Shop;
