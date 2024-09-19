import { Category } from "./CategoriesType";
import {
  fetchCategoriesStart,
  fetchCategoriesSucess,
  fetchCategoriesFailed,
} from "./CategoriesAction";
import { Action } from "redux";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};
const CategoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as Action
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSucess.match(action)) {
    console.log("hereeeeeeeeeeeeeeeeeee");
    console.log(action.payload);

    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};

export default CategoriesReducer;
