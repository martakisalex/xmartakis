import React, { useState, useEffect } from 'react';
import { fetchSheetData } from '../utils/googleSheetsApi'; // Ensure this path is correct
import Favorites from './Favorites';
import './FavoritesContent.css';

function FavoritesContent() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await fetchSheetData('favorites'); // Fetch all data
        setFavorites(data);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites-content">
      <h2 className="favorites-header">My Favorite Video Games Thus Far</h2>
      {favorites.length > 0 ? (
        <Favorites favorites={favorites} />
      ) : (
        <p className="loading-message">Loading favorites...</p>
      )}
    </div>
  );
}

export default FavoritesContent;
