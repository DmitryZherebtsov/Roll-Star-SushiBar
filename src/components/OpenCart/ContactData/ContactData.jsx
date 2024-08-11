import React, { useState } from 'react';
import style from './ContactData.module.css';
// import emailjs from 'emailjs-com';

const ContactData = ({ orderedItems }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    street: '',
    house: '',
    entrance: '',
    floor: '',
    apartment: '',
    comment: '',
    numberOfPersons: '',
    paymentMethod: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData, 
      [name]: name === 'phone' ? value.replace(/\D/g, '') : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (orderedItems.length === 0) {
      alert("Ваш кошик пустий ви не можете відправити замовлення");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    const combinedData = {
      user: userData,
      orders: orderedItems
    };

    const totalPrice = combinedData.orders.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const sendDataToServer = (combinedData) => {
      fetch('http://localhost:8080/api/data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
      })
      .then(response => response.text())
      .then(result => {
          console.log(result);
      })
      .catch(error => {
          console.error('Error:', error);
      });
      console.log("sendDataToServer")
  };

    const emailContent = `Замовлення від ${userData.firstName} ${userData.lastName}

        КОНТАКТНА ІНФОРМАЦІЯ:
        Телефон: ${userData.phone}
        Адреса: ${userData.street}, буд. ${userData.house}, під'їзд ${userData.entrance}, поверх ${userData.floor}, квартира ${userData.apartment}
        Кількість осіб: ${userData.numberOfPersons}
        Спосіб оплати: ${userData.paymentMethod}
        Email: ${userData.email}
        Коментар: ${userData.comment}

        ЗАМОВЛЕННЯ:
          ${combinedData.orders.map((item, index) => ` 
          ${index + 1}. ${item.title} - ( ${item.quantity} шт. ) Ціна: ${item.price * item.quantity} грн`).join('\n')}

          Загальна ціна: ${totalPrice} грн
      `;

    try {
      sendDataToServer(combinedData);

      // await emailjs.send('service_seqpo9b', 'template_7uicn3p', {
      //   message: emailContent,
      //   to_email: 'zherebtsovdima31@gmail.com'
      // }, 'IOWpIbgbv1Zznt3WH');

      alert('Ваше замовлення було відправлено!');
      // console.log(combinedData);
      clearForm();
    } catch (error) {
      console.error('Помилка під час відправлення замовлення:', error);
      alert('Сталася помилка під час відправлення замовлення. Спробуйте ще раз.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false); // 3 секунди блокування кнопки(щоб запобігти спаму на пошту )
      }, 3000);
    }
  };

  const clearForm = () => {
    setUserData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      street: '',
      house: '',
      entrance: '',
      floor: '',
      apartment: '',
      comment: '',
      numberOfPersons: '',
      paymentMethod: ''
    });
  };

  return (
    <div className={style.contact_data}>
      <form onSubmit={handleSubmit} method="post">
        <div className={style.info_data}>
          <h1>Контактні Дані </h1>
          <hr />
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Ім'я"
                type="text"
                name="firstName" // ім'я поля
                value={userData.firstName} // тут userData отримує значення поля
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="Прізвище"
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='Номер телефону'
                maxLength={12}
                value={userData.phone}
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="rollstar@gmail.com"
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={style.info_data}>
          <h1>Адреса </h1>
          <hr />
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Вулиця"
                type="text"
                name="street"
                value={userData.street}
                onChange={handleChange}
                required
              />
              <span>*</span>
            </div>
            <div className={style.border}>
              <input
                placeholder="Дiм"
                type="text"
                name="house"
                value={userData.house}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Підʼїзд"
                type="text"
                name="entrance"
                value={userData.entrance}
                onChange={handleChange}
              />
            </div>
            <div className={style.border}>
              <input
                placeholder="Поверх"
                type="text"
                name="floor"
                value={userData.floor}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.rows}>
            <div className={style.border}>
              <input
                placeholder="Квартира/Офіс"
                type="text"
                name="apartment"
                value={userData.apartment}
                onChange={handleChange}
              />
            </div>
            <div className={style.border}>
              <input
                placeholder="Коментар до замовлення"
                type="text"
                name="comment"
                value={userData.comment}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={style.info_data}>
          <br />
          <h1>Вкажіть кiлькiсть персон </h1>
          <hr />
          <br />
          <div className={style.border}>
            <input
              type="tel"
              maxLength={4}
              placeholder='Кількість осіб'
              name="numberOfPersons"
              value={userData.numberOfPersons}
              onChange={handleChange}
              required
            />
            <span>*</span>
          </div>
        </div>
        <div className={style.info_data}>
          <h1>Спосіб Оплати </h1>
          <hr />
          <div className={style.payment_type}>
            <label className="custom-radio-btn">
              <input
                type="radio"
                name="paymentMethod"
                value="Готівкою"
                checked={userData.paymentMethod === 'Готівкою'}
                onChange={handleChange}
              />
              <span className={style.label}>Готівкою</span>
            </label>
            <label className="custom-radio-btn left">
              <input
                type="radio"
                name="paymentMethod"
                value="Картою"
                checked={userData.paymentMethod === 'Картою'}
                onChange={handleChange}
              />
              <span className={style.label}>Картою</span>
            </label>
          </div>
        </div>
        <p style={{ margin: '1em 0' }}>
          * Після того, як це замовлення буде відправлено, вам зателефонують для підтвердження
        </p>
        <div className={style.btn}>
          <button
            className={style.button_submit}
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Відправляється...' : 'Відправити'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactData;