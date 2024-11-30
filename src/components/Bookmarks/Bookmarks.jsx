import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 mx-auto ml-4 p-4 rounded-xl">
      <div className='text-center bg-gray-300 rounded-lg'>
        <h3 className="text-2xl p-3 text-blue-800">Reading Time: {readingTime} min</h3>
      </div> 
     <div>
      <h2 className="text-2xl text-center mt-4">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark} />
        ))}
      </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
