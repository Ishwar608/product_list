import axios from "../../api/AxiosConfig";
import { put, takeLatest } from "redux-saga/effects";
import { addProductFail, addProductSuccess } from "../Action/addProductData";
import { ADD_PRODUCT } from "../Action/content";
import { PRODUCTS } from "../../api/apiCollections";

export function* AddProductsDataSaga(action) {
  try {
    const response = yield axios.post(PRODUCTS, action);
    yield put(addProductSuccess(response.data));
  } catch (error) {
    yield put(addProductFail(error.message));
  }
}
export function* watchAddProductsData() {
  yield takeLatest(ADD_PRODUCT, AddProductsDataSaga);
}
