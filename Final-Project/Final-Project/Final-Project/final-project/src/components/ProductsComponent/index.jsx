import React from 'react';
import './ProductsComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { selectProducts } from '../../redux/productsSlice';
import carIcon from '../../assets/imageFolder/carIcon.png';
import circleIcon from '../../assets/imageFolder/circleIcon.png';
import reloadIcon from '../../assets/imageFolder/reloadIcon.png';
import printIcon from '../../assets/imageFolder/printIcon.png';

const ProductsComponent = () => {
  
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='productsSection'>
    <div  className='productsInfo'>
        <h1 className='heading'>Discover NEW Arrivals</h1>
        <p className='paragraph'>Recently added shirts!</p>
    </div>
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name}/>
          <div className='productImgDetalis'>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button className='animatedButton' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
 <div className='purchaseDetalisMainDiv'>
 <div className='purchaseDetalis'>
     <div className='purchaseDetalisDiv'>
       <h1 className='productsHeading'>Free Shipping</h1>
       <p className='productsParagraph'>Enjoy free shipping on all orders above $100</p>
       <img className='justIcon' src={carIcon}/>
     </div>
     <div className='purchaseDetalisDiv samePurchaseDetalisDiv'>
       <h1 className='productsHeading'>SUPPORT 24/7</h1>
       <p className='productsParagraph'>Our support team is there to help you for queries</p>
       <img className='justIcon' src={circleIcon}/>
     </div>
     <div className='purchaseDetalisDiv'>
       <h1 className='productsHeading'>30 DAYS RETURN</h1>
       <p className='productsParagraph'>Simply return it within 30 days for an exchange.</p>
       <img className='justIcon' src={reloadIcon}/>
     </div>
     <div className='purchaseDetalisDiv samePurchaseDetalisDiv'>
       <h1 className='productsHeading'>100% PAYMENT SECURE</h1>
       <p className='productsParagraph'>Our payments are secured with 256 bit encryption</p>
       <img className='justIcon' src={printIcon}/>
     </div>
   </div>
 </div>
   <div className='promo'>
    <div className='promoPartOne card'>
        <h1 className='promoDetalis'>PEACE OF MIND</h1>
        <p className='promoDetalisParagraph'>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
        <button className='buyNowBtn'>BUY NOW</button>
    </div>
    <div className='promoPartTwo card'>
      <h1 className='promoDetalis'>BUY 2 GET 1 FREE</h1>
      <p className='promoDetalisParagraph'>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
      <button className='buyNowBtn'>BUY NOW</button>
    </div>
   </div>
    </div>
  )
}

export default ProductsComponent;
