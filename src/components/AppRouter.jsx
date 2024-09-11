import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage/HomePage';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import ReviewsPage from './ReviewsPage/ReviewsPage';
import Review from './ReviewsPage/Review';
import BlogsPage from './BlogsPage/BlogsPage';
import Blog from './BlogsPage/Blog'; // Import the new Blog component
import AboutPage from './AboutPage/AboutPage';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/reviews/:title" element={<Review />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
