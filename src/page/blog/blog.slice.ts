import { createSlice } from '@reduxjs/toolkit'

export interface PostState {
  postId: string
}

const initialPostState: PostState = {
  postId: ''
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState: initialPostState,
  reducers: {}
})

const blogReducer = blogSlice.reducer

export default blogReducer
