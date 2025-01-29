import NewsList from '@/components/NewsList/NewsList'
import { NewsEntity } from '@/ts/interfaces'
import { DUMMY_NEWS } from '@/dummy-data'

const NewsListPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS as NewsEntity[]} />
    </>
  )
}

export default NewsListPage
