import PropTypes from 'prop-types';
import { CiBookmarkPlus } from 'react-icons/ci';

const Blog = ({blog, handleAddToBookmark, handleMarkedAsRead }) => {
  const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
  
  return(
    <div className="mb-20 mt-4 space-y-4">
      <img className="w-full mb-8 rounded-md" src={cover} alt={`Cover picture for ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="Author image" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-xl"
          >
            <CiBookmarkPlus />
          </button>
        </div>
      </div>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a className='mr-2 text-gray-600' href="">
            {hash}</a>{' '}</span>)
        }
      </p>
      <button onClick={() => handleMarkedAsRead(id, reading_time)} className='mr-2 text-blue-900 underline font-bold mt-3'>
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkedAsRead: PropTypes.func.isRequired,
};

export default Blog;