import {
  ADD_PRODUCT,
  FAIL,
  GET_PRODUCT,
  REQUESTSTART,
} from "../Action/content";

const initialState = {
  items: [],
  isloadding: false,
  error: {},
};

export const ProductsList = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUESTSTART:
      return { ...state, isloadding: true };
    case GET_PRODUCT:
      return { ...state, items: payload, isloadding: false };
    case ADD_PRODUCT:
      return { ...state, items: payload, isloadding: false };
    case FAIL:
      return { ...state, error: payload, isloadding: false };
    default:
      return state;
  }
};
