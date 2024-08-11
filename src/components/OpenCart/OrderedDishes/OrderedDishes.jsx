import React, { useContext } from 'react';
import style from './OrderedDishes.module.css';
import { cart_assets, assets } from '../../../assets/assets';
import { CartContext } from '../CartContext';

const OrderedDishes = ({ orderedItems }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return orderedItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className={style.ordered_food}>
      <h1>Ваші Замовлення</h1>
      <br />
      <div className={style.scroll}>
        {orderedItems.length === 0 ? (
          <p className={style.empty}>Кошик порожній ._.</p>
        ) : (
          orderedItems.map((item) => (
            <div className={style.dish} key={item.id}>
              <div>
                <img className={style.ordered_food_img} src={item.image} />
              </div>
              <div className={style.description}>
                <div className={style.first}>
                  <h2 className={style.title}>{item.title}</h2>
                  <img
                    className={style.cross}
                    src={cart_assets.cross}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
                <div className={style.second}>
                  <p className={style.grey}>{item.weight}g</p>
                  <br />
                </div>
                <div className={style.three}>
                  <div className={style.count}>
                    <img
                      src={assets.minus}
                      alt="minus"
                      className='minus'
                      onClick={() => decreaseQuantity(item.id)}
                    />
                    <div className="quantity-container">
                      <h3 className='quantity'>{item.quantity}</h3>
                    </div>
                    <img
                      src={assets.plus}
                      alt="plus"
                      className='plus'
                      onClick={() => increaseQuantity(item.id)}
                    />
                  </div>
                  <div>
                    <p className={style.price}>{item.quantity * item.price}₴</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={style.price_place}>
        <div className={style.price_button}>
          <p>Разом: </p>
          <p>{calculateTotal()} грн</p>
        </div>
      </div>
    </div>
  );
};

export default OrderedDishes;
