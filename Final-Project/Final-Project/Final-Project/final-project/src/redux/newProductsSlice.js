import { createSlice } from '@reduxjs/toolkit';
import grayPoloShirt from '../assets/imageFolder/grayPoloShirt.png';
import redShirt from '../assets/imageFolder/redShirt.png';
import poloWhiteShirt from '../assets/imageFolder/poloWhiteShirt.png';
import pinkCasualShirt from '../assets/imageFolder/pinkCasualShirt.png';

const newProductsSlice = createSlice({
  name: 'newProducts',
  initialState: {
    products: [
      { id: 9, name: 'Gray Polo Shirt', price: 49.0, image: grayPoloShirt },
      { id: 10, name: 'Red Shirt', price: 69.0, image: redShirt },
      { id: 11, name: 'Polo White Shirt', price: 29.0, image: poloWhiteShirt },
      { id: 12, name: 'Pink Casual Shirt', price: 39.0, image: pinkCasualShirt },
    ],
  },
  reducers: {},
});

export const selectNewProducts = (state) => state.newProducts.products;
export default newProductsSlice.reducer;

