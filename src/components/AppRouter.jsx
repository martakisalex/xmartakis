import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import HomePage from './HomePage/HomePage.jsx';
import FavoritesPage from './FavoritesPage/FavoritesPage.jsx';
import ReviewsPage from './ReviewsPage/ReviewsPage.jsx';
import BlogsPage from './BlogsPage/BlogsPage.jsx';
import AboutPage from './AboutPage/AboutPage.jsx';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
