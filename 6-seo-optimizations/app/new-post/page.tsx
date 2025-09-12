import React from 'react'
import { createPost } from '@/actions/posts'
import PostForm from '@/components/post-form'

const NewPostPage: React.FC = () => {
  return <PostForm action={createPost} />
}

export default NewPostPage
