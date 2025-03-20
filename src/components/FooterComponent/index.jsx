import React from 'react';
import './FooterComponent.css';
import arrowIcon from '../../assets/imageFolder/arrow.png';
import visaCard from '../../assets/imageFolder/visaIcon.png';
import masterCard from '../../assets/imageFolder/masterCardIcon.png';
import paypalCard from '../../assets/imageFolder/paypalIcon.png';
import visaElectron from '../../assets/imageFolder/visaElectronIcon.png';

const FooterComponent = () => {
  return (
    <div className='footerSection'>
     <div className='footerPart'>
     <div className='footerLinks'>
     <h3>COMPANY INFO</h3>
       <ul>
        <li><a href='/'>About Us</a></li>
        <li><a href='/'>Latest Posts</a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><a href='/'>Shop</a></li>
       </ul>
     </div>
     <div className='footerLinks'>
     <h3>HELP LINKS</h3>  
       <ul>
        <li><a href='/'>Tracking</a></li>
        <li><a href='/'>Order Status</a></li>
        <li><a href='/'>Delivery</a></li>
        <li><a href='/'>Shipping Info</a></li>
        <li><a href='/'>FAQ</a></li>
       </ul> 
     </div>
     <div className='footerLinks'>
     <h3>USEFUL LINKS</h3> 
       <ul>
        <li><a href='/'>Special Offers</a></li>
        <li><a href='/'>Gift Cards</a></li>
        <li><a href='/'>Advetising</a></li>
        <li><a href='/'>Terms of Use</a></li>
       </ul>   
     </div>
     <div className='footerLinks inputFooterLinks'>
     <h3>GET IN THE KNOW</h3> 
     <div class="email-input-container">
        <input type="email" class="email-input" placeholder="Enter email" />
        <img src={arrowIcon}/>
    </div>
     </div>
     </div>
     <div className='footerLinks differentFooterLinks'>
     <div class="email-input-container">
     <h3>GET IN THE KNOW</h3> 
        <input type="email" class="email-input" placeholder="Enter email" />
        <img src={arrowIcon}/>
    </div>
     </div>
     <div className='footerBottomPart'>
       <div className='leftSide'>
        <p>© 2020 NorthStar eCommerce</p>
        <div className='detalis'>
         <p>Privacy Policy</p>
         <p>Terms & Conditions</p>
        </div>
       </div>
       <div className='rightSide'>
         <img className='cardImg' src={visaCard}/>
         <img className='cardImg' src={masterCard}/>
         <img className='cardImg' src={paypalCard}/>
         <img src={visaElectron}/>
       </div>
     </div>
    </div>
  )
}

export default FooterComponent;