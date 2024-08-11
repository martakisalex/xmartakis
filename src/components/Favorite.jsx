import React from 'react';
import './Favorite.css';

function Favorite({ title, genre, releaseYear, platform, comment, wikiUrl, imageUrl }) {
  return (
    <div className="favorite-card">
      <img src={imageUrl} alt={`${title} cover`} className="favorite-image" />
      <div className="favorite-details">
        <h2 className="favorite-title">
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer"><strong>{title}</strong></a>
        </h2>
        <p className="favorite-genre"><strong>Genre:</strong> {genre}</p>
        <p className="favorite-year"><strong>Release Year:</strong> {releaseYear}</p>
        <p className="favorite-platform"><strong>Platform:</strong> {platform}</p>
        <p className="favorite-comment">{comment}</p>
      </div>
    </div>
  );
}

export default Favorite;
