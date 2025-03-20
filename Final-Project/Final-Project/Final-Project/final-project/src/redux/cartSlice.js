import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const product = action.payload;
        const exists = state.items.some(item => item.id === product.id);
      
        if (!exists) {
          state.items.push(product);
        } else {
          alert(`${product.name} is already in the cart.`);
        }
      },
    removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;






