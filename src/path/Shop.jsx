import { Routes, Route } from "react-router-dom";
import IndividualCategoryPage from "./IndividualCategoryPage";
import CategoriesPreviewPage from "./CategoriesPreviewPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../store/Categories/CategoriesAction";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync()); //// Dispatch the thunk action when the component mounts
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path="/:title" element={<IndividualCategoryPage />} />
    </Routes>
  );
};
export default Shop;
