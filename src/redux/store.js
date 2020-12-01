import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const composeEnhancers =
  typeof window === "object" &&
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
