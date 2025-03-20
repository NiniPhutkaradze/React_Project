import React from 'react';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/imageFolder/user.png';
import cartIcon from '../../assets/imageFolder/cart.png';
import menuIcon from '../../assets/imageFolder/menu.png';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {
 
  const cartItemCount = useSelector((state) => state.cart.items.length);
  console.log(cartItemCount);

  return (
  <div className='div'> 
   <header className="header">
    <div className="logo">NorthStar</div>
    <div className="navLinks">
     <ul>
      <li><Link to="/" className='home'>HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/contact">CONTACT US</Link></li>
     </ul>
    </div>
    <div className='mobileMenu'>
     <Link to="/" className='home'>H</Link>
     <Link to="/about" className='pageLinks'>A</Link>
     <Link to="/contact" className='pageLinks'>C</Link>
    </div>
    <div className="icons">
      <img className='userIcon' src={userIcon}/>
      <div className='lineIcon'>        
        <Link to="/cart"><img className='cartIcon' src={cartIcon}/></Link>
      <div className="notification-badge">{cartItemCount}</div>
     </div>
      <div className='secondIcon'><img className='menuIcon' src={menuIcon}/></div>
    </div>
   </header>
  </div>
  )
}

export default HeaderComponent;