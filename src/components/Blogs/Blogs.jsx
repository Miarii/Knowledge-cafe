import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

function Blogs({ handleAddToBookmark }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to load blogs:', err));
  }, []);

  return (
    <div className="md:w-2/3 mx-auto">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        />
      ))}
    </div>
  );
}

  Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
  }



export default Blogs;
