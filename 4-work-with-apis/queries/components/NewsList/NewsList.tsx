import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/ts/constants'
import { NewsEntity } from '@/ts/interfaces'

interface NewsListProps {
  news: NewsEntity[]
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <ul className='news-list'>
      {Array.isArray(news)
        ? news.map(news => {
            return (
              <li key={news.id}>
                <Link href={`${ROUTES.NEWS}/${news.slug}`}>
                  <Image
                    src={`/images/news/${news.image}`}
                    alt={news.title}
                    width={300}
                    height={300}
                  />
                  <span>{news.title}</span>
                </Link>
              </li>
            )
          })
        : null}
    </ul>
  )
}

export default NewsList
