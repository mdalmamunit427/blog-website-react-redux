import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import Card from './Card';

const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

  const { tags, search } = useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch,tags, search]);



  const paginatedBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full lg:w-2/3">
      {/* single cards */}
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
          <div className="pagination space-x-2">
            <button className='px-2 bg-red-500 text-white rounded' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <span>{currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} className='px-2 bg-indigo-500 text-white rounded'>Next</button>
          </div>
        </div>
      ) : (
        <div className="col-span-12">No blogs found!</div>
      )}
    </div>
  );
};

export default PostCards;
