import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.Categories.categories; //get the target data from store tree, then we can process data later
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (
    categories //categories:come from selectCategoriesReducer, it only run , when selectCategoriesReducer is different
  ) => {
    return categories.reduce((acc, current) => {
      //applies the logic to the data the first time and after changing, how to process data
      const { title, items } = current;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
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
