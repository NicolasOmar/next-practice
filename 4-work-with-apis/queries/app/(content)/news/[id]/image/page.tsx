import { FC } from 'react'
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '@/db/dummy-data'

interface NewsImagePageProps {
  params: Promise<{ id: string }>
}

const NewsImagePage: FC<NewsImagePageProps> = async ({ params }) => {
  const { id } = await params
  const newsItem = DUMMY_NEWS.find(news => news.slug === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <section className='fullscreen-image'>
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      />
    </section>
  )
}

export default NewsImagePage
