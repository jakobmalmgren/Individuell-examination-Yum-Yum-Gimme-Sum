import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slices/orderItemSlice";
import apiReducer from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    orderItem: itemReducer,
    api: apiReducer,
  },
});

export default store;
