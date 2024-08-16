import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { home_page } from '../../assets/assets';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [ReviewsFromServer, setReviewsFromServer] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const fetchReviewsFromServer = () => {
    fetch('http://localhost:3001/api/getReviews')
      .then(response => response.json())
      .then(data => {
        setReviewsFromServer(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        // setLoading(false);
      });
  };

  const sendReviewsToServer = (formDataObject) => {
    fetch('http://localhost:3001/api/reviews', {
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    formDataObject.rating = rating;
    sendReviewsToServer(formDataObject);
    alert("Дякую! Ваш відгук розглянуть і опублукують.");
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
        {loading ? (
              Array(3).fill(0).map((_, index) => (
                <div className="skeleton-review" key={index}>
                  <div>
                    <div className="skeleton-avatar"></div>
                    <div className="skeleton-text"></div>
                  </div>

                  <div className="skeleton-text"></div>
                </div>
              ))
            ) : (
              ReviewsFromServer.length === 0 ? (
                <div className="no-reviews">
                  <p>На сайті немає відгуків :/</p>
                </div>
            ) : (
            ReviewsFromServer.map((review, index) => (
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
              ))
            )
          )
        }
      </div>
    </div>
  );
}

export default Reviews;
