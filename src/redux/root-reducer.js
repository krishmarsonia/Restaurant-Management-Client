import { combineReducers } from "redux";

import productReducer from "./product/product.reducer";

export default combineReducers({
    product: productReducer
})