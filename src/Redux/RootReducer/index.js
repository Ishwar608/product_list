import { combineReducers } from "redux";
import { ProductsList } from "../Reducer/productReducer";
import { AddProductList } from "../Reducer/addProductReducer";
export default combineReducers({
  ProductsList,
  AddProductList,
});
