import React, { useContext } from 'react';
import style from './OpenCart.module.css';
import ContactData from './ContactData/ContactData';
import OrderedDishes from './OrderedDishes/OrderedDishes';
import { CartContext } from './CartContext';


const OpenCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={style.open_cart}>
      <div className={style.main_block}>
        <div className={style.mobile_version_dishes}>
          <OrderedDishes orderedItems={cart} />
        </div>
        <div className={style.data}>
          <ContactData orderedItems={cart} />
        </div>
        <div className={style.dishes}>
          <OrderedDishes orderedItems={cart} />
        </div>
      </div>
      {/* <center><p>Після відправки зачекайте 2-3 секунди до повідомлення</p></center> */}
      <br />
    </div>
  );
}

export default OpenCart;
