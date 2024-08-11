import React from 'react';
import style from './Navigation.module.css';
import { nav_assets, dropdown } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.nav}>
      <nav className={style.navbar}>
        <Link to='/'>Головна</Link>

        <Link to='/MenuPage' className={style.dropdown}>
          Меню 
          <img className={style.arrow} src={nav_assets.arrow} alt="" />
          <div className={style.menu}>
            <ul className={style.options}>
              {dropdown.map(item => (
                <li>
                  <Link to={`/MenuPage/${item.type}`} className={style.option_link}>
                    <img className={style.options_img} src={item.image} alt={item.name} />
                    <span className={style.white_text}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Link>


        <Link to='/AboutUsPage'> Про нас </Link>
        <Link to='/Reviews'> Відгуки </Link>
      </nav>
    </div>
  );
};

export default Navigation;
