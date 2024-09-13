import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Storage Engines: localStorage

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"], // which state, you want to persist or not persist, here the current will betracked by AuthstateLister, so we don't have to persist it, otherweise may cause conflict
};
const PersistReducer = persistReducer(persistConfig, rootReducer); // (config, reducer)  returns an enhanced reducer

const middlewares = [logger]; //catch actions before they hit our reducer and they log out the state
const composedEnhance = compose(applyMiddleware(...middlewares));

export const store = legacy_createStore(
  PersistReducer, //new the saved value is persisted
  undefined,
  composedEnhance
);
export const persistor = persistStore(store); //returns persistor object
