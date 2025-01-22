import { FC } from 'react'

/**
 * The page recieves an {params} object with the value of the dynamic route
 * You can check it by console logging the {params} object from the destructured props
 */
const BlogPostPage: FC<{ params: { idea: string } }> = ({ params }) => {
  return (
    <main>
      <p>Blog Post</p>
      {
        // This is not a good practice, but it is just to show that the params object
      }
      <p>{params.idea}</p>
    </main>
  )
}

export default BlogPostPage
