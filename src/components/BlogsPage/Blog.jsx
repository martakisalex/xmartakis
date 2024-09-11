// src/components/BlogsPage/Blog.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSheetData } from '../../utils/googleSheetsApi';
import './Blog.css';

function Blog() {
  const { title: urlTitle } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await fetchSheetData('blogs');
        const blog = data.find(
          ([title]) => title.toLowerCase().replace(/\W+/g, '-') === urlTitle
        );
        if (blog) {
          setBlogData({
            title: blog[0],
            date: blog[1],
            imageUrl: blog[2],
            excerpt: blog[3],
            content: blog[4],
          });
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [urlTitle]);

  if (!blogData) {
    return <p>Loading blog...</p>;
  }

  return (
    <div className="blog-details">
      <h2>{blogData.title}</h2>
      <img src={blogData.imageUrl} alt={blogData.title} className="blog-image" />
      <p className="blog-date">{blogData.date}</p>
      <p className="blog-content">{blogData.content}</p>
    </div>
  );
}

export default Blog;
