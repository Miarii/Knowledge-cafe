import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkedAsRead = (id, time) => {
    // Update reading time correctly when marking a blog as read
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from the blogs array
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };

  const handleAddToBookmark = (blog) => {
    // Add blog to bookmarks without checking for uniqueness
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkedAsRead={handleMarkedAsRead}
        />
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}
        />
      </div>
    </>
  );
}

export default App;
