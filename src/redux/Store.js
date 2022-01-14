import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loaderReducer from "./slices/loaderSlice";
import productsSlice from "./slices/productsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    products: productsSlice,
  },
});
