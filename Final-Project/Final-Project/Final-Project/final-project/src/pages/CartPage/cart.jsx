import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import './CartPage.css';

const CartPage = () => {
  
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className='cartHeading'>Cart Page</h2>
      {cartItems.length === 0 ? (
        <p className='cartParagraph'>Your cart is empty.</p>
      ) : (
        <div className='cartItemsMainDiv'>
          <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name}/>
             <div className='cartItemsNamePrice'>
             <p>{item.name}</p>
             <p>${item.price}</p>
             </div>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
