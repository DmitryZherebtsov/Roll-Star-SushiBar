import React from 'react'
import './MenuBar.css'
import MenuSets from './MenuSets/MenuSets'

const MenuBar = () => {
  return (
    <div className='home_menu'>
        <div>
            <h1 className='home_menu_text'>У нашому меню Ви знайдете страви на будь який смак</h1>
        </div>

        <div className='home_menu_categories'>
            <MenuSets />
        </div>
        <br />
        <p className='home_menu_text'>* Видана страва може відрізнятись від фото</p>
        <br />
    </div>
  )
}

export default MenuBar