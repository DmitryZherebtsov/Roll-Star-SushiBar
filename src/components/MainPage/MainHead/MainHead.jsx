import React from 'react'
import './MainHead.css'
import { home_page } from "../../../assets/assets";
import { Link } from 'react-router-dom';

const MainHead = () => {
  return (
    <div className='home_page'>

        <div className='main_text'>
            <div>
                <h2 className='captionRoll'>ROLLSTAR<br /> </h2>
                <h3 className='captionSushi'>SUSHI BAR</h3>
            </div>
            <div>
                <p className='captionDelivery'>Доставка найсмачнішої стріт-фуд їжі <br /> у Вінниці</p>
            </div>
            <div>
                <Link to='/MenuPage'><button className='menu_button'> <span>Меню</span> </button></Link>
            </div>
        </div>

        <div className='main_picture'>
            <img className='home_page_picture' src={home_page.mainPicture} alt="" />
            {/* <img className='home_page_pictureMobile' src={home_page.mainPictureMobile} alt="" /> */}
        </div>

    </div>
  )
}

export default MainHead