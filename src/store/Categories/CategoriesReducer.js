import { CATEGORIES_ACTION_TYPES } from "./CategoriesType";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLosding: false,
  error: null,
};
const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLosding: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS:
      return { ...state, categories: payload, isLosding: false };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLosding: false };
    default:
      return state;
  }
};

export default CategoriesReducer;
