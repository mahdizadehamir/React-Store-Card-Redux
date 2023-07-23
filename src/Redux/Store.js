import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { createStore } from "redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
