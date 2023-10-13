import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { findReviews } from '../servises/Api';

import css from '../components/Reviews.module.css';
import Loader from 'components/Loader';

export default function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setIsLoading(true);
        const dataReviews = await findReviews(id);
        setReviews(dataReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  if (!reviews) return;

  const reviewsArray = [...reviews.results];
  const showReviews = Array.isArray(reviewsArray) && reviewsArray.length;

  return (
    <div>
       <Loader visible={isLoading} />
      {error && <p>Error loading film data from the server.</p>}
      <ul className={css.reviewsList}>
        {showReviews ? (
          reviewsArray.map(review => {
            return (
              <li key={review.id}>
                <h2 className={css.reviewTitle}>Author: {review.author}</h2>
                <p className={css.reviewItemContent}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
}
