import { ROUTES } from '@/ts/constants'
import Link from 'next/link'
import { DUMMY_NEWS } from '@/dummy-data'
import Image from 'next/image'

const NewsListPage = () => {
  return (
    <ul className='news-list'>
      {Array.isArray(DUMMY_NEWS)
        ? DUMMY_NEWS.map(news => {
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

export default NewsListPage
