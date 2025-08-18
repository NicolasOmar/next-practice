'use client'

import { FC, useOptimistic } from 'react'
import Image from 'next/image'
import LikeButton from './like-icon'
import { formatDate } from '@/lib/format'
import { PostEntity } from '@/ts/entities'
import { toggleLikePost } from '@/actions/posts'

interface PostProps {
  post: PostEntity;
  postAction: (postId: number) => Promise<void>;
}

const Post: FC<PostProps> = ({ post, postAction }) => {
  return (
    <article className='post'>
      <div className='post-image'>
        <Image
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
            {/*
              On this case, the action will be adjusted using the bind function
              Bind will readjust function's arguments by passing them from the second argument
            */}
            <form
              action={postAction.bind(null, +post.id)}
              className={post.isLiked ? 'liked' : ''}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  )
}

const Posts: FC<{ posts: PostEntity[] }> = ({ posts }) => {
  /*
    To handle data in an optimistic way and sync the data we need behind the user
    We will need to use useOptimistic, a next hook that relies on the data we want to be handled and then a function to be ejecuted to give the user the feedback on the moment
    Hook's result will be an updated state and a function to be executed when an function calls it (like a api call or so)
  */
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (previousPosts, updatedId) => {
    return previousPosts.map(post => post.id === updatedId ? { ...post, isLiked: !post.isLiked } : post)
  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>
  }

  async function updatePost(postId: number) {
    updateOptimisticPosts(postId)
    await toggleLikePost(postId)
  }

  return (
    <ul className='posts'>
      {optimisticPosts.map(post => (
        <li key={post.id}>
          <Post post={post} postAction={updatePost} />
        </li>
      ))}
    </ul>
  )
}

export default Posts
