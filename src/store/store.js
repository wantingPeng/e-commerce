import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
const middlewares = [logger]; //catch actions before they hit our reducer and they log out the state
const composedEnhance = compose(applyMiddleware(...middlewares));
export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhance
);
