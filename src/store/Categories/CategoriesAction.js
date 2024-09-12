import { CATEGORIES_ACTION_TYPES } from "./CategoriesType";

export const categoriesAction = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categoriesArray,
});
