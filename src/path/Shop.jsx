import { Routes, Route } from "react-router-dom";
import IndividualCategoryPage from "./IndividualCategoryPage";
import CategoriesPreviewPage from "./CategoriesPreviewPage";
import { getCollectionAndDocFromDB } from "../utils/firebase";
import { useEffect } from "react";
import { setCategories } from "../store/Categories/CategoriesReducer";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategorise = async () => {
      //!!!!!!!!!when we use a async func inside useEffect, we don't actually just just put async after useEffect,instead creat a new async func
      const collectionData = await getCollectionAndDocFromDB("categorise");
      dispatch(setCategories(collectionData));
    };
    getCategorise();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path="/:title" element={<IndividualCategoryPage />} />
    </Routes>
  );
};
export default Shop;
