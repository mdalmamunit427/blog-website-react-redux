import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsSlice'
import blogReducer from './features/singleBlog/blogSlice'
import filterReducer from './features/filter/filterSlice'
import relatedBlogsReducer from './features/relatedBlogs/relatedBlogsSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    filter: filterReducer,
    relatedBlogs: relatedBlogsReducer,
  },
})