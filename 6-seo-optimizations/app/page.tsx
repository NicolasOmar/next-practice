import React, { Suspense } from 'react'
import { Metadata } from 'next'
import Posts from '@/components/posts'
import { getPosts } from '@/lib/posts'

/**
 * metadata property shoud be exported to be included in the head of the document
 * Besides title and description, you can also add openGraph, twitter and other SEO related properties
 * Those are just one of many ways to manage SEO in Next.js
 * In this case, you can set the metadata on a static way by creating an object and exporting it
 */
// export const metadata: Metadata = {
//   title: 'Seo Optimization exercise - Home',
//   description: "Welcome back! Here's what you might've missed."
// }

/**
 * In case you want to generate the metadata dynamically, you have to create a function
 * in order to fetch the data you want to use in the metadata and return the object
 */
export const generateMetadata = async () => {
  const posts = await getPosts(2)

  return {
    title: `Seo Optimization exercise - You have ${posts.length} new posts`,
    description: "Welcome back! Here's what you might've missed."
  }
}

const LatestPosts: React.FC = async () => {
  const latestPosts = await getPosts(2)
  return <Posts posts={latestPosts} />
}

const Home: React.FC = async () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id='latest-posts'>
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  )
}

export default Home
