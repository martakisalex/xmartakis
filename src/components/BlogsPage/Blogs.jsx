import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Blogs.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const entriesPerPage = 5; // Set the number of entries per page to 5

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchSheetData('blogs');
        setBlogs(data.map(([title, date, imageUrl, excerpt]) => ({
          title,
          date,
          imageUrl,
          excerpt,
        })));
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const sanitizeTitleForUrl = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * entriesPerPage < blogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentEntries = blogs.slice(
    currentPage * entriesPerPage,
    currentPage * entriesPerPage + entriesPerPage
  );

  return (
    <div className="blogs-container">
      {currentEntries.map((blog, index) => (
        <Link to={`/blogs/${sanitizeTitleForUrl(blog.title)}`} key={index} className="blog-entry-link">
          <div key={index} className="blog-entry">
            <div className="blog-image-container">
              <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
              <div className="blog-content-overlay">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * entriesPerPage >= blogs.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blogs;
