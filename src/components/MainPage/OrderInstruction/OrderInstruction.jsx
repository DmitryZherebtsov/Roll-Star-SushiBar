import React from 'react'
import './OrderInstruction.css'
import { home_page } from '../../../assets/assets'

const OrderInstruction = () => {
  return (
    <div className='instruction'>
      <div>
        <h1>Оформіть замовлення на сайті</h1>
      </div>

      <div className='stages'>
        <div >
            <img src={home_page.koszyk} alt="" />
            <h2>Оформлення</h2>
            <p>Зробіть замовлення на нашому сайті або по телефону з зазначенням обраних страв, напоїв і їх кількості</p>
        </div>

        <div>
            <img src={home_page.confirm} alt="" />
            <h2>Підтвердження</h2>
            <p>Ми зв’язуємося з вам протягом декількох хвилин, уточнюємо замовлення, умови та час доставки і оплату</p>
        </div>

        <div>
            <img src={home_page.delivery} alt="" />
            <h2>Доставка</h2>
            <p>Доставка здійснюється на зручний для вас час або самовивозом з найближчого до вас ресторану ROLLSTAR</p>
        </div>

        <div>
            <img src={home_page.youarecooked} alt="" />
            <h2>Готово</h2>
            <p>Ви насолоджуєтесь смачними стравами від ROLLSTAR</p>
        </div>
      </div>

      <p>* Доставка розраховується індивідуально</p>
      <br />
     
    </div>
  )
}

export default OrderInstruction
