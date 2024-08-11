import React from 'react'
import './DivideElement.css';
import { nav_assets } from '../../../assets/assets'
import { home_page } from '../../../assets/assets';

const DivideElement = () => {
  return (
    <div className='divide_block'>
        <hr className='divide_line' />
        <img className='divide_logo' src={nav_assets.logo} />
        <hr className='divide_line' />
        <img src={home_page.hand_roll_tuna}/>
    </div>
  )
}

export default DivideElement
