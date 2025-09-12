'use client'
import React from 'react'
import { formatDate } from '@/lib/format'
import LikeButton from './like-icon'
import { togglePostLikeStatus } from '@/actions/posts'
import Image, { ImageLoaderProps } from 'next/image'

interface PostEntity {
  id: number
  image: string
  title: string
  userFirstName: string
  createdAt: string
  isLiked: boolean
  likes: number
  content: string
}

interface PostProps {
  post: PostEntity
  action: (id: number) => void
}

/**
 * The imageLoader function is used to optimize image loading using a third based service that
 * will work as a proxy in order to deliver a more optimized version of the image
 */
const imageLoader = (imageUrl: ImageLoaderProps | string) => {
  const urlSeparator = 'upload/'
  const [imageStart, imageEnd] = imageUrl.toString().split(urlSeparator)
  return `${imageStart}${urlSeparator}w_200,h_150,c_fill/${imageEnd}`
}

const Post: React.FC<PostProps> = ({ post, action }) => {
  return (
    <article className='post'>
      <div className='post-image'>
        <Image
          loader={imageLoader}
          src={post.image}
          alt={post.title}
          fill
        />
      </div>
      <div className='post-content'>
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={() => action(post.id)}
              className={post.isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  )
}

interface PostsProps {
  posts: PostEntity[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  // ...optimistic update logic can be added here if needed...
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>
  }
  return (
    <>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          action={togglePostLikeStatus}
        />
      ))}
    </>
  )
}

export default Posts
