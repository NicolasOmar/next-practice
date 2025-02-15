import { FC } from 'react'
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '@/dummy-data'
import Link from 'next/link'

interface NewsDetailPageProps {
  params: Promise<{ id: string }>
}

const NewsDetailPage: FC<NewsDetailPageProps> = async ({ params }) => {
  const { id } = await params
  const newsItem = DUMMY_NEWS.find(news => news.slug === id)

  if (!newsItem) {
    /**
     * In case your newsItem does not exists, you will be redirected to the closest not-found page
     * For this page, will be the one located at app/news/[id] folder
     */
    notFound()
  }

  return newsItem ? (
    <article className='news-article'>
      <header>
        <Link href={`/news/${id}/image`}>
          <img
            src={`/images/news/${newsItem.image ?? null}`}
            alt={newsItem.title ?? ''}
          />
        </Link>

        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  ) : null
}

export default NewsDetailPage
