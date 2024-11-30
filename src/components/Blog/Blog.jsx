import PropTypes from 'prop-types';
import { CiBookmarkPlus } from 'react-icons/ci';

function Blog({ blog, handleAddToBookmark }) {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="mb-20">
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
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>{' '}
          </span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
