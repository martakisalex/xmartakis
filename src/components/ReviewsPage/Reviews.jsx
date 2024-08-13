// src/components/ReviewsPage/Reviews.jsx

import React, { useEffect, useState } from 'react';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Reviews.css';
import { Link } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const entriesPerPage = 10;

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchSheetData('reviews');
      setReviews(data.map(([title, overallScore, reviewDate]) => ({
        title,
        reviewDate,
        overallScore: parseInt(overallScore, 10),
      })));
    };

    fetchReviews();
  }, []);

  const getScoreColor = (score) => {
    const colors = [
      '#FF0000', '#FF7F00', '#FFFF00', '#7FFF00',
      '#00FF00', '#00FF7F', '#00FFFF', '#007FFF',
      '#0000FF', '#8B00FF',
    ];
    return colors[score - 1];
  };

  const sanitizeTitleForUrl = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * entriesPerPage < reviews.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentEntries = reviews.slice(
    currentPage * entriesPerPage,
    currentPage * entriesPerPage + entriesPerPage
  );

  return (
    <div className="reviews-container">
      <div className="reviews-table">
        {currentEntries.map((review, index) => (
          <Link
            to={`/reviews/${sanitizeTitleForUrl(review.title)}`}
            key={index}
            className="review-entry-link"
          >
            <div className="review-entry">
              <div
                className="review-score"
                style={{ backgroundColor: getScoreColor(review.overallScore) }}
              >
                {review.overallScore}
              </div>
              <div className="review-title">{review.title}</div>
              <div className="review-date">{review.reviewDate}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * entriesPerPage >= reviews.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Reviews;
