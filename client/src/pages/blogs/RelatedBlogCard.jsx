import React from 'react'
import { Link } from 'react-router-dom'

const RelatedBlogCard = ({blog}) => {
//    console.log(blog)
const {title,image, content, author, authorPic, category } = blog || {};
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
     <Link  to={`/blogs/${blog.id}`}> <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={image}
        alt="blog"
      /></Link>
      <div className="p-6">
        <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {category}
        </p>
       <Link  to={`/blogs/${blog.id}`}> <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {title.slice(0, 72) + "..."}
        </h1></Link>
        <p className="leading-relaxed mb-3">
          {content.slice(0, 50) + "..."}
        </p>
        <div className="flex items-center flex-wrap ">
          <Link to={`/blogs/1`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RelatedBlogCard