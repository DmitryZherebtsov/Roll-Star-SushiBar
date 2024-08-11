import React, { useState } from 'react';
import style from './NavBar.module.css';
import Logo from '../NavBar/Logo/Logo';
import Navigation from './Navigation/Navigation';
import Cart from './Cart/Cart';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={style.head}>
        <div className={style.nav_bar}>
          <div className={style.logo_block}>
            <Logo />
          </div>
          <div className={style.nav_block}>
            <Navigation />
          </div>
          <div className={style.cart_block}>
            <Cart toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      
      <div className={`${style.burger_menu} ${isMenuOpen ? style.open : ''}`}>
        <ul className={style.burger_nav}>
          <Link to='/' onClick={closeMenu}><li>Головна</li></Link>
          <hr />
          <Link to='/MenuPage' onClick={closeMenu}><li>Меню</li></Link>
          <hr />
          <Link to='/Reviews' onClick={closeMenu}><li>Відгуки</li></Link>
          <hr />
          <Link to='/AboutUsPage' onClick={closeMenu}><li>Про Нас</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
