import { FAIL, GET_PRODUCT, REQUESTSTART } from "./content";

export const getProjectDataStart = () => {
  return {
    type: REQUESTSTART,
  };
};

export const getProjectData = (response) => ({
  type: GET_PRODUCT,
  payload: response,
});
export const getProjectDataFail = (error) => {
  return {
    type: FAIL,
    payload: error,
  };
};
