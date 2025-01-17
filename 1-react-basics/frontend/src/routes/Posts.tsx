import { FC } from 'react'
import { Outlet } from 'react-router-dom'
/*
  - Here goes the list of imports, which can be from
    - other components
    - style files (from css to scss)
    - reusable logic functions (from javascript or typescript)
*/
import PostList from '../components/PostList/PostList'
import { BASE_URL } from '../constants'

const Posts: FC = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts

export const postsLoader = async () => {
  const postsResponse = await fetch(`${BASE_URL}/posts`)
  const parsedPostsResponse = await postsResponse.json()
  return parsedPostsResponse.posts
}
