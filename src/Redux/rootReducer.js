import { combineReducers } from "redux";
import { productReducer } from "./Products/ProductsReducer";
import { CartReducer } from "./Cart/CartReducer";

export const rootReducer = combineReducers({
  productState: productReducer,
  cardState: CartReducer,
});
