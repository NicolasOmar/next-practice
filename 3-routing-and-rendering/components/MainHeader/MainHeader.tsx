import { ROUTES } from '@/ts/constants'
import Link from 'next/link'

const MainHeaderPage = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.NEWS}>News</Link>
        </li>
      </ul>
    </header>
  )
}

export default MainHeaderPage
