/* import { CATEGORIES_ACTION_TYPES } from "./CategoriesType";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};
const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export default CategoriesReducer;
 */
import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const CategoriesReducer = categoriesSlice.reducer;
