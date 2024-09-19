import { createSelector } from "reselect";
import { CategoriesState } from "./CategoriesReducer";
import { rootState } from "../store";
import { CategoryMap } from "./CategoriesType";

const selectCategoriesReducer = (state: rootState): CategoriesState => {
  return state.Categories;
}; //get the target data from store tree, then we can process data later

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (
    Categories //categories:come from selectCategoriesReducer, it only run , when selectCategoriesReducer is different
  ) => {
    return Categories.categories.reduce((acc, current) => {
      //applies the logic to the data the first time and after changing, how to process data
      const { title, items } = current;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (Categories) => Categories.isLoading //got return
);

/* export const selectCategories = (state) => {
  console.log(state);

  const arr = state.Categories.categories;
  return arr.reduce((acc, current) => {
    const { title, items } = current;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}); 
};*/
