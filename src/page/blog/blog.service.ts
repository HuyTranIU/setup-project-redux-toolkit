import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TPost } from '../../types/type.blog'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (built) => ({
    getPosts: built.query<TPost[], void>({
      query: () => 'posts'
    }),
    addPost: built.mutation<TPost, Omit<TPost, 'id'>>({
      query: (body) => {
        return {
          url: 'posts',
          method: 'POST',
          body
        }
      }
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation } = blogApi
