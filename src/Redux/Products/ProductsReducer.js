const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST_SENT":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_REQUEST_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    case "FETCH_REQUEST_FAILURE":
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
