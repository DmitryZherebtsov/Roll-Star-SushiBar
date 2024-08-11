import React, { useEffect } from 'react';
import { assets } from '../../../assets/assets';
import './MenuNav.css';

const categories = [
  { id: 'rolls', label: 'Роли', icon: assets.sushi_roll },
  { id: 'sushi', label: 'Сети', icon: assets.set_rolls },
  { id: 'pizza', label: 'Піца', icon: assets.pizza },
  { id: 'soups', label: 'Супи', icon: assets.soup },
  { id: 'bouly', label: 'Боули', icon: assets.boul },
  { id: 'fishburger', label: 'Фіш Доги<br />Бургери', icon: assets.fishburger }
];

const MenuNav = ({ category, setGlobalCategory }) => {
  useEffect(() => {
    setGlobalCategory(category);
  }, [category, setGlobalCategory]);

  const handleCategoryChange = (newCategory) => {
    setGlobalCategory(newCategory);
  };

  return (
    <div className='menunav'>
      <div className='menunav-container'>
        {categories.map((cat) => (
          <div key={cat.id} className='dish_nav'>
            <div
              className={category === cat.id ? 'category-item clicked' : 'category-item'}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <img src={cat.icon} alt={`${cat.label} icon`} />
              <p className={category === cat.id ? 'category-item clicked' : 'category-item'} dangerouslySetInnerHTML={{ __html: cat.label }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuNav;
