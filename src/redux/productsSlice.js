
import { createSlice } from '@reduxjs/toolkit';
import plainWhiteShirt from '../assets/imageFolder/plainWhiteShirt.png';
import denimJacket from '../assets/imageFolder/denimJacket.png';
import blackPoloShirt from '../assets/imageFolder/blackPoloShirt.png';
import blueSweatshirt from '../assets/imageFolder/blueSweatshirt.png';
import bluePlainShirt from '../assets/imageFolder/bluePlainShirt.png';
import darkBlueShirt from '../assets/imageFolder/darkBlueShirt.png';
import outcastTShirt from '../assets/imageFolder/outcastTShirt.png';
import poloPlainShirt from '../assets/imageFolder/poloPlainShirt.png';

const initialState = {
  products: [
    { id: 1, name: 'Plain White Shirt', price: 29.0, image: plainWhiteShirt },
    { id: 2, name: 'Denim Jacket', price: 69.0, image: denimJacket },
    { id: 3, name: 'Black Polo Shirt', price: 49.0, image: blackPoloShirt },
    { id: 4, name: 'Blue Sweatshirt', price: 79.0, image: blueSweatshirt },
    { id: 5, name: 'Blue Plain Shirt', price: 49.0, image: bluePlainShirt },
    { id: 6, name: 'Dark Blue Shirt', price: 89.0, image: darkBlueShirt },
    { id: 7, name: 'Outcast T Shirt', price: 19.0, image: outcastTShirt },
    { id: 8, name: 'Polo Plain Shirt', price: 29.0, image: poloPlainShirt },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}, 
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;



