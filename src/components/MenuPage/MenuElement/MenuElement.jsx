// MenuElement.jsx
import React, { useState, useContext } from 'react';
import { assets } from "../../../assets/assets";
import { CartContext } from '../../OpenCart/CartContext';
import "./MenuElement.css";

const MenuElement = ({ item }) => {
  const [itemCount, setItemCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increaseItemCount = () => {
    setItemCount(prev => prev + 1);
  };

  const decreaseItemCount = () => {
    if (itemCount > 0) {
      setItemCount(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (itemCount > 0) {
      addToCart({ ...item, quantity: itemCount });
      setItemCount(0);
    }
  };

  return (
    <div className='menu-card'>
      <div className='first_one'>
        <div className='dish_img'>
          <img src={item.image} alt={item.title} />
        </div>
        <div className='info_dish'>
          <div>
            <h1 className="title">{item.title}</h1>
          </div>
          <div className="description-container">
            <p className="description">{item.description}</p>
            <br />
          </div>
        </div>
      </div>
      <div className='second_one'>
        <div className='price'>
          <h3 className="weight">{item.weight} грам</h3>
          <h3 className="price">{item.price} ₴</h3>
        </div>
        <div className='to_card'>
          <div className='plus_minus'>
            <img onClick={decreaseItemCount} src={assets.minus} alt="minus" className='minus'/>
            <div className="quantity-container">
              <h3 className='quantity'>{itemCount}</h3>
            </div>
            <img onClick={increaseItemCount} src={assets.plus} alt="plus" className='plus'/>
          </div>
          <button className='knopka' onClick={handleAddToCart}><h3>У кошик</h3></button>
        </div>
      </div>
    </div>
  );
};

export default MenuElement;
