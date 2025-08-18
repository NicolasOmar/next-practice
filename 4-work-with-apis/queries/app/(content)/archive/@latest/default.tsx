import NewsList from '@/components/NewsList/NewsList'
import { getLatestNews } from '@/functions/news'

/**
 * This page is called [default] because it will work to show a default rendering
 * for the /archive/@latest route.
 * This page can replace the [page.tsx] file in the same directory and it will be used as the default rendering.
 */
const ArchiveLatestLayoutPage = async () => {
  const latestNews = await getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}

export default ArchiveLatestLayoutPage
