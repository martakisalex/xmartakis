import React from 'react';
import Favorite from './Favorite';
import './Favorites.css';

function Favorites({ favorites }) {
  return (
    <div className="favorites-container">
      {favorites.map((row, index) => {
        const [title, genre, releaseYear, platform, comment, wikiUrl, imageUrl] = row;
        return (
          <Favorite
            key={index}
            title={title}
            genre={genre}
            releaseYear={releaseYear}
            platform={platform}
            comment={comment}
            wikiUrl={wikiUrl}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
