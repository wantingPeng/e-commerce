import { CATEGORIES_ACTION_TYPES } from "./CategoriesType";
import { getCollectionAndDocFromDB } from "../../utils/firebase";
//// Action creators
export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});
export const fetchCategoriesSucess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCESS,
  payload: categoriesArray,
});
export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});
// Thunk action creator
//fetchCategoriesAsync return this thunk function
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const collectionData = await getCollectionAndDocFromDB("categorise");
    dispatch(fetchCategoriesSucess(collectionData));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
