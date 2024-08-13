import React from 'react';
import NavBar from './components/NavBar/NavBar';
import OpenCart from './components/OpenCart/OpenCart';
import Footer from './components/Footer/Footer';
import MenuPage from './components/MenuPage/MenuPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import Reviews from './components/Reviews/Reviews';
import CartProvider from './components/OpenCart/CartContext';

// import config from './config.js'

const App = () => {

  return (
    <div>
      <CartProvider>
        <Router>
          <NavBar />

          <Routes>
    
            <Route path='/' element={<MainPage />} />

            <Route path='/MenuPage/:category?' element={<MenuPage />} />

            <Route path='/OpenCart' element={<OpenCart />} />

            <Route path='/AboutUsPage' element={<AboutUsPage />} />

            <Route path='/Reviews' element={<Reviews />} />
          
          </Routes>

          <Footer />
          
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
