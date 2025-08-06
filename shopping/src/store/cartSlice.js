import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    { id: 1, title: "Laptop", price: 1500 },
    { id: 2, title: "Phone", price: 700 },
    { id: 3, title: "Headphones", price: 200 },
    { id: 4, title: "Keyboard", price: 100 }
  ],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
