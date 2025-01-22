import Link from 'next/link'

const BlogPage = () => {
  return (
    <main>
      <h1>Blog Page</h1>
      {Array.from({ length: 10 }).map((_, index) => (
        <p key={index}>
          {/**
           * On this page, the rendered links will send the user to a dynamic page
           * That page /blog/[idea]/page.ts will uses the [idea] tag as a Next.js dynamic route
           * That tag will be replaced by the value of the href attribute
           * You can assign any name you preffer, this case is just to give an silly example
           * When you are sending the [idea-INDEX_NUMBER], you are sending on Next.js params
           * the idea-INDEX_NUMBER as the value of the [idea] key
           */}
          <Link href={`/blog/idea-${index}`}>Post #{++index}</Link>
        </p>
      ))}
    </main>
  )
}

export default BlogPage
