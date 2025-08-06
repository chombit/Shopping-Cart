import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Laptop", description: "A powerful laptop", price: 1500,  },
  { id: 2, title: "Phone", description: "Smartphone with good camera", price: 700, },
  { id: 3, title: "Headphones", description: "Noise-cancelling", price: 200, },
  { id: 4, title: "Keyboard", description: "Mechanical keyboard", price: 100,  },
];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    }
  }
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
