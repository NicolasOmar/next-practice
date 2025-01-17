import { FC } from 'react'
import { Outlet } from 'react-router-dom'
/*
  - Here goes the list of imports, which can be from
    - other components
    - style files (from css to scss)
    - reusable logic functions (from javascript or typescript)
*/
import PostList from '../components/PostList/PostList'

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
