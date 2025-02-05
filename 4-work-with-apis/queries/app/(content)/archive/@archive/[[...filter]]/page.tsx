import { FC, Suspense } from 'react'
import Link from 'next/link'
import NewsList from '@/components/NewsList/NewsList'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from '@/functions/news'

interface ArchiveYearPageProps {
  params: Promise<{ filter: string[] | undefined }>
}

/**
 * A 'catch all route' is page will be activated for any segments of the page after [/archive]
 * This page cannot be at the same time that a parent [page.tsx] page because of a specificity issue
 * Next itself will throw an error if you try to do that
 * "Error: You cannot define a route with the same specificity as a optional catch-all route ("/archive" and "/archive[[...filter]]")."
 */
const ArchiveYearPage: FC<ArchiveYearPageProps> = async ({ params }) => {
  const { filter } = await params
  let newsContent = <p>No news found for the selected period.</p>
  const links = await getAvailableNewsYears()

  if (Array.isArray(filter)) {
    const selectedYear = filter[0] ?? null
    const selectedMonth = filter[1] ?? null

    if (
      (selectedYear &&
        !(await getAvailableNewsYears()).includes(+selectedYear as never)) ||
      (selectedMonth &&
        !getAvailableNewsMonths(+selectedYear).includes(
          +selectedMonth as never
        ))
    ) {
      throw new Error('Invalid filter')
    }

    if (selectedYear && !selectedMonth) {
      const newsPerYear = await getNewsForYear(selectedYear)
      newsContent = <NewsList news={newsPerYear} />
    } else {
      const newsPerYearAndMonth = await getNewsForYearAndMonth(
        selectedYear,
        selectedMonth
      )
      newsContent = <NewsList news={newsPerYearAndMonth} />
    }
  }

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          {links.map((_link: string, _linkIndex: number) => (
            <li key={_linkIndex}>
              <Link href={`/archive/${_link}`}>{_link}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Suspense is a way to add a loading screen in a specific section of the page without recurring to loading page pattern */}
      <Suspense fallback={<p>Loading filtered news...</p>}>
        {newsContent}
      </Suspense>
    </header>
  )
}

export default ArchiveYearPage
