import React, { useEffect, useState } from 'react';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Blogs.css';
import { Link } from 'react-router-dom';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchSheetData('blogs');
        setBlogs(data.map(([title, date, imageUrl, content, excerpt]) => ({
          title,
          date,
          imageUrl,
          content,
          excerpt,
        })));
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const truncateContent = (content, length) => {
    if (content.length > length) {
      return content.substring(0, length) + '... Read more';
    }
    return content;
  };

  return (
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <Link to={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="blog-entry-link">
          <div className="blog-entry">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <p className="blog-preview">{truncateContent(blog.content, 150)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
