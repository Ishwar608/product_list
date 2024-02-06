import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS } from "./content";

export const addProductData = (projectData) => ({
  type: ADD_PRODUCT,
  payload: projectData,
});
export const addProductSuccess = (projectData) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: projectData,
});
export const addProductFail = (projectData) => ({
  type: ADD_PRODUCT_FAIL,
  payload: projectData,
});
