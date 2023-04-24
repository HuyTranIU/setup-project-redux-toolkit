import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import blogReducer from './page/blog/blog.slice'
import { blogApi } from './page/blog/blog.service'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
