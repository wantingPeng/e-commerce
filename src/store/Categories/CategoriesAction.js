import { CATEGORIES_ACTION_TYPES } from "./CategoriesType";

export const categoriesAction = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
