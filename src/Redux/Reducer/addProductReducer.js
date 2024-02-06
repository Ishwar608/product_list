import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
} from "../Action/content";

const initialState = {
  items: [],
  isloadding: false,
  error: {},
};

export const AddProductList = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, isloadding: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, items: payload, isloadding: false };
    case ADD_PRODUCT_FAIL:
      return { ...state, error: payload, isloadding: false };
    default:
      return state;
  }
};
