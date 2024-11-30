
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 mx-auto ml-4">
            <h2 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks => <Bookmark
                bookmark={bookmarks}
                key={bookmarks.id}
                ></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks