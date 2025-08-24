import React from 'react'
import { formatDate } from '@/lib/format'
import LikeButton from './like-icon'
import { togglePostLikeStatus } from '@/actions/posts'

interface PostType {
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
  post: PostType
  action: (id: number) => void
}

const Post: React.FC<PostProps> = ({ post, action }) => {
  return (
    <article className='post'>
      <div className='post-image'>
        <img
          src={post.image}
          alt={post.title}
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
  posts: PostType[]
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
