import { combineReducers } from "redux";
import { productReducer } from "./Products/ProductsReducer";

export const rootReducer = combineReducers({
  productState: productReducer,
});
