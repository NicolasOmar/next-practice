import React from 'react'
import Posts from '@/components/posts'
import { getPosts } from '@/lib/posts'

const FeedPage: React.FC = async () => {
  const posts = await getPosts()
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  )
}

export default FeedPage
