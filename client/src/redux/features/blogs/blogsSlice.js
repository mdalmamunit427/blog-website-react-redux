import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async ({ tags, search }) => {
    const blogs = await getBlogs(tags, search);
    return blogs;
});

 const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.blogs=[]
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs=action.payload;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.blogs = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    
    }
 })

 export default blogsSlice.reducer;