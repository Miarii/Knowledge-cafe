import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // if (!bookmarks.some((b) => b.id === blog.id)) {
    //   setBookmarks([...bookmarks, blog]);
    //   console.log('Added to bookmarks:', blog);
    // } else {
    //   console.log('Blog already bookmarked:', blog);
    // }
    const newBookmarks = [...bookmarks, blog];  
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
