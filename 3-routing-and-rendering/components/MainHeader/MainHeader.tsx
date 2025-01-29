import { ROUTES } from '@/ts/constants'
import Link from 'next/link'

const MainHeaderPage = () => {
  return (
    <header className='main-header'>
      <div id='logo'>
        <Link href={ROUTES.HOME}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link href={ROUTES.NEWS}>News</Link>
          </li>
          <li>
            <Link href={ROUTES.ARCHIVE}>Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeaderPage
