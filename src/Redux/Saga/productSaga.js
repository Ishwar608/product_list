import axios from "../../api/AxiosConfig";
import { put, takeLatest } from "redux-saga/effects";

import { PRODUCTS } from "../../api/apiCollections";
import { getProjectData, getProjectDataFail } from "../Action/productAction";
import { REQUESTSTART } from "../Action/content";

export function* getProductsDataSaga() {
  try {
    const response = yield axios.get(PRODUCTS);
    yield put(getProjectData(response.data));
  } catch (error) {
    yield put(getProjectDataFail(error.message));
  }
}

export function* watchProductsData() {
  yield takeLatest(REQUESTSTART, getProductsDataSaga);
}
