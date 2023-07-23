import { getProducts } from "../../services/api";
const fetchRequest = () => {
  return { type: "FETCH_REQUEST_SENT" };
};
const fetchRequestSuccess = (products) => {
  return { type: "FETCH_REQUEST_SUCCESS", payload: products };
};
const fetchRequestFailure = (error) => {
  return { type: "FETCH_REQUEST_FAILURE", payload: error };
};

export const fetchApi = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const productData = await getProducts();
      dispatch(fetchRequestSuccess(productData));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchRequestFailure(errorMsg));
    }
  };
};
