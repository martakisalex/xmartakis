import React, { useEffect, useState } from 'react';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Blogs.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-entry">
          <div className="blog-image-container">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content-overlay">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
