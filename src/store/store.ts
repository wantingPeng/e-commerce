import {
  compose,
  legacy_createStore,
  applyMiddleware,
  Middleware,
} from "redux";
import Logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Storage Engines: localStorage
import { thunk } from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type rootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"], // which state, you want to persist or not persist, here the current will betracked by AuthstateLister, so we don't have to persist it, otherweise may cause conflict
};
const PersistReducer = persistReducer(persistConfig, rootReducer); // (config, reducer)  returns an enhanced reducer

const middlewares = [
  process.env.NODE_ENV !== "production" && Logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware)); //catch actions before they hit our reducer and they log out the state

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhance = composeEnhancers(applyMiddleware(...middlewares));

export const store = legacy_createStore(
  PersistReducer, //new the saved value is persisted
  undefined,
  composedEnhance
);
export const persistor = persistStore(store); //returns persistor object
