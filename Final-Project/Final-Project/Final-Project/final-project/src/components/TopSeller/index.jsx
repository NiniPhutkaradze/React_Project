import React from 'react';
import './topSeller.css';
import { selectNewProducts } from '../../redux/newProductsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const TopSeller = () => {

  const newProducts = useSelector(selectNewProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  }

  return (
    <div className='topSellerSections'>
        <div className='topSellersDetalis'>
            <h1 className='topSellersHeading'>Top Sellers</h1>
            <p className='topSellersParagraph'>Browse our top-selling products</p>
        </div>
        <div className='topSellerImages'>
      {newProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className='topSellerImgDetalis'>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button className='animatedButtonTwo' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
        </div>
        <div className='topSellerButton'>
          <button className='topSellerBtn'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default TopSeller;