import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const orderItemSlice = createSlice({
  name: "orderItem",
  initialState,
  //träna o kolla på!!!
  reducers: {
    resetItems: (state) => {
      state.items = []; // Nollställer items till en tom array
    },
    addItem: (state, action) => {
      const checkIfExists = state.items.find((item) => {
        return action.payload.id === item.id;
      });

      if (!checkIfExists) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        checkIfExists.quantity += 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
    incrementItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id); // Hitta objektet med rätt id
      if (item) {
        item.quantity += 1; // Öka kvantiteten om objektet hittas
      }
    },
    decrementItem: (state, action) => {
      //hita rätt item
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        // Om kvantiteten är större än 1, minska den
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Om kvantiteten är 1 eller mindre, ta bort objektet
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});
// console.log(initialState.items); ex kan inte logga här ju?
// de ja frågade om..

export const { resetItems, addItem, removeItem, incrementItem, decrementItem } =
  orderItemSlice.actions;
export default orderItemSlice.reducer;
