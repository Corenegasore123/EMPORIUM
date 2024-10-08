import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Categories from './components/categories';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tshirts from './components/tshirts';
import Shoes from './components/shoes';
import Trousers from './components/trousers';
import Dresses from './components/dresses';
import Kids from './components/kids';
import Pairs from './components/pairs';
import Shirts from './components/shirts';
import Shorts from './components/shorts';
import Sweaters from './components/sweaters';
import CheckOut from './components/checkout/checkout';
import Completed from './components/completed/index';
import BackToTop from './components/BackToTop';
import Preloader from './components/preloader/Preloader'; 

function App() {
  const [cart, setCart] = useState([]);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [loading, setLoading] = useState(true); 

  const isCartEmpty = cart.length === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; 
  }

  return (
    <Router>
      <Header cart={cart} setCart={setCart} />
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/tshirts' element={<Tshirts cart={cart} setCart={setCart} />} />
        <Route path='/trousers' element={<Trousers cart={cart} setCart={setCart} />} />
        <Route path='/shoes' element={<Shoes cart={cart} setCart={setCart} />} />
        <Route path='/dresses' element={<Dresses cart={cart} setCart={setCart} />} />
        <Route path='/kids' element={<Kids cart={cart} setCart={setCart} />} />
        <Route path='/pairs' element={<Pairs cart={cart} setCart={setCart} />} />
        <Route path='/shirts' element={<Shirts cart={cart} setCart={setCart} />} />
        <Route path='/shorts' element={<Shorts cart={cart} setCart={setCart} />} />
        <Route path='/sweaters' element={<Sweaters cart={cart} setCart={setCart} />} />
        
        <Route
          path='/checkout'
          element={isCartEmpty ? <Navigate to="/" replace /> : <CheckOut setCart={setCart} setIsCheckoutComplete={setIsCheckoutComplete} />}
        />
        
        <Route
          path='/payment'
          element={!isCheckoutComplete ? <Navigate to="/checkout" replace /> : <Completed />}
        />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
