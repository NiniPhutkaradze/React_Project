import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import newProductsReducer from './newProductsSlice';
import cartReducer from '../redux/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    newProducts: newProductsReducer,
    cart: cartReducer,
  },
});

export default store;