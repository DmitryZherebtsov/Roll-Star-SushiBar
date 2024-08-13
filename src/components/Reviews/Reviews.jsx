import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { home_page } from '../../assets/assets';

const Reviews = ( ) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5); // це початкове значення рейтингу яке буде 5
  

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const [ReviewsFromServer, setReviewsFromServer] = useState([]);

    const fetchReviewsFromServer = () => {
        // fetch('http://localhost:3000/getReviews')
        fetch('https://roll-backend-render.onrender.com/api/getReviews')
            .then(response => response.json())
            .then(data => {
              setReviewsFromServer(data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            })
            console.log('ReviewsFromServer');
            console.log(ReviewsFromServer);
    };

  const sendReviewsToServer = (formDataObject) => {
      // fetch('http://localhost:3000/reviews', {
      fetch('https://roll-backend-render.onrender.com/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        setReviews([]);
    })
    .catch(error => {
        console.error('Error:', error);
    });
 };
  useEffect(() => {
    fetchReviewsFromServer();
    console.log(ReviewsFromServer)
  }, [])

  const handleSubmit = (event) => {

    fetchReviewsFromServer();

    event.preventDefault(); // prevent default form submission
    const formData = new FormData(event.target); //create FormData object
    const formDataObject = Object.fromEntries(formData.entries()); // Convert FormData to plain object
    formDataObject.rating = rating; // Додати рейтинг до даних форми
    console.log('Form Data:', formDataObject); //put form data to console
    sendReviewsToServer(formDataObject);

    alert("Вашу форму розглянуть і опублукують.");
    setReviews([...reviews, formDataObject]);
    event.target.reset();
    setRating(5);
  };

  return (
    <div className='reviews'>
      <div className='review_form'>
        <form onSubmit={handleSubmit}>
          <h1>Залишити Відгук</h1>
          <div className='border'>
            <input
              placeholder="Ім'я"
              type="text"
              name="firstName"
              maxLength={12}
              required
            />
            <span>*</span>
          </div>
          <div className='border'>
            <input
              placeholder="Прізвище"
              type="text"
              name="lastName"
              maxLength={12}
            />
          </div>

          <div className='border'>
            <input
              placeholder="Коментар"
              type="text"
              name="comment"
              required
            />
            <span>*</span>
          </div>

          <div className='border'>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder='+380 xx xx xx xxx'
              maxLength={12}
              required
            />
            <span>*</span>
          </div>

          <div className='rating'>
            <h2>Ваша оцінка: </h2>
            <div className='star-icon'>
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    name="rating"
                    id={`rating${i + 1}`}
                    value={i + 1}
                    checked={rating === i + 1}
                    onChange={handleRatingChange}
                  />
                  <label htmlFor={`rating${i + 1}`} className='fa fa-star'></label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />

          <div className='review_button'>
            <button className="send" type='submit'>Відправити</button>
          </div>
        </form>
      </div>

      <br />

      <div className='user-reviews'>
        <h1>Відгуки Наших Клієнтів</h1>
        <br />
        <hr />
        {ReviewsFromServer.map((review, index) => (
          <div key={index}>
            <br />
            <div className='review'>
              <div className='review-left'>
                <div>
                  <img className='review-image' src={home_page.user} alt="" />
                </div>
                <div className='review-name'>
                  {review.firstName} {review.lastName && review.lastName}
                </div>
                <div className='star-icon'>
                  {[...Array(5)].map((_, i) => (
                    <label key={i} className={`fa fa-star ${i < review.rating ? 'checked' : ''}`}></label>
                  ))}
                </div>
              </div>
              <div className='review-right'>
                <div className='review-comment'>
                  {review.comment}
                </div>
              </div>
            </div>
            <br />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
