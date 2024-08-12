import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomeContent from './HomeContent';
import FavoritesContent from './FavoritesContent';
import ReviewsContent from './ReviewsContent';
import BlogsContent from './BlogsContent';
import AboutContent from './AboutContent';

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/favorites" element={<FavoritesContent />} />
          <Route path="/reviews" element={<ReviewsContent />} />
          <Route path="/blogs" element={<BlogsContent />} />
          <Route path="/about" element={<AboutContent />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
