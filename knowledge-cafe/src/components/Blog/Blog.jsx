import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;

  // console.log(blog)
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full mb-8' src={cover} alt="" />
      <div className='flex justify-between items-center mb-4'>
        <div className='flex'>
          <img className='w-14' src={author_img} alt="" />
          <div className='ml-6'>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className='ml-2' onClick={() => handleAddToBookmark(blog)}><BsBookmarks></BsBookmarks></button>
        </div>
      </div>
      <h2 className='text-4xl mb-4'>{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
      <button className='font-bold text-purple-800 underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog:PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func
}

export default Blog;