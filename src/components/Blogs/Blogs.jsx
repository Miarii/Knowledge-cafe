import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

function Blogs({ handleAddToBookmark, handleMarkedAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to load blogs:', err));
  }, []);

  return (
    <div className="md:w-2/3 mx-auto">
      {/* <h1 className="text-2xl mt-4 mb-8 text-center">Blogs: {blogs.length}</h1> */}
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkedAsRead={handleMarkedAsRead}
        />
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkedAsRead: PropTypes.func.isRequired,
};

export default Blogs;
