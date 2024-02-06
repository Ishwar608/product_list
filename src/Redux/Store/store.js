import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "../RootReducer";
import { watchProductsData } from "../Saga/productSaga";
import { watchAddProductsData } from "../Saga/addProductSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(watchProductsData);
sagaMiddleware.run(watchAddProductsData);

export default store;
