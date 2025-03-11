import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const orderItemSlice = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    addItem: () => {},
    removeItem: () => {},
    incrementItem: () => {},
    decrementItem: () => {},
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } =
  orderItemSlice.actions;
export default orderItemSlice.reducer;
