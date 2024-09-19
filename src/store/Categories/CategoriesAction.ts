import { CATEGORIES_ACTION_TYPES, Category } from "./CategoriesType";
import { getCollectionAndDocFromDB } from "../../utils/firebase";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../CreatAction";
import { Dispatch } from "redux";
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

//// Action creators
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
); //function "() =>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START" will be call in withMatcher

export const fetchCategoriesSucess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS,
      categoriesArray
    )
);
export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
// Thunk action creatorZ

export const fetchCategoriesAsync = () => async (dispatch: Dispatch) => {
  //fetchCategoriesAsync return this thunk function
  dispatch(fetchCategoriesStart());
  try {
    const collectionData = await getCollectionAndDocFromDB("categorise");
    dispatch(fetchCategoriesSucess(collectionData));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
