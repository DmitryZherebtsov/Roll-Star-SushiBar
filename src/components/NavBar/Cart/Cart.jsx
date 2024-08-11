// Cart.jsx
import React, { useContext } from 'react';
import style from './Cart.module.css';
import { nav_assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';
import { CartContext } from '../../OpenCart/CartContext';

const Cart = ({ isMenuOpen, toggleMenu }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <div className={style.cart_phone}>
      <div>
        <a href='tel:+380682711816' aria-label="Phone number +380682711816">
          <img className={style.colored} src={nav_assets.phone} alt="Phone icon" />
        </a>
      </div>
      
      <div className={style.cart_container}>
        <Link to='/OpenCart' aria-label="Open Cart">
          <img className={style.colored} src={nav_assets.cart} alt="Cart icon" />
          {cartItemCount > 0 && <span className={style.cart_dot}></span>}
        </Link>
      </div>

      <div className={style.burger_icon} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Menu">
        <div className={`${style.line} ${isMenuOpen ? style.line1 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line2 : ''}`}></div>
        <div className={`${style.line} ${isMenuOpen ? style.line3 : ''}`}></div>
      </div>
    </div>
  );
};

export default Cart;
