
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HeaderComponent from './components/HeaderComponent';
import ImageComponent from './components/ImageComponent';
import ProductsComponent from './components/ProductsComponent';
import TopSeller from './components/TopSeller';
import FooterComponent from './components/FooterComponent';
import CartPage from './pages/CartPage/cart';

function App() {

const location = useLocation();

return (
<div>
  <HeaderComponent />
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
      {location.pathname === '/' && (
      <>
        <ImageComponent />
        <ProductsComponent />
        <TopSeller />
        <FooterComponent />
      </>
)}
    </div>
</div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
