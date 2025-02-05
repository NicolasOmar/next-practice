import NewsList from '@/components/NewsList/NewsList'
import { getAllNews } from '@/functions/news'

const NewsListPage = async () => {
  const news = await getAllNews()

  return (
    <>
      <h1>News Page</h1>
      {news ? <NewsList news={news} /> : null}
    </>
  )
}

export default NewsListPage
