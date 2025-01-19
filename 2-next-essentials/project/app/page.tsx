import { ROUTES } from '@/constants'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>

      <p>
        <Link href={`${ROUTES.COMMUNITY}`}>Community</Link>
      </p>

      <p>
        <Link href={`${ROUTES.MEALS}`}>Meals</Link>
      </p>

      <p>
        <Link href={`${ROUTES.MEALS_SHARE}`}>Share Meals</Link>
      </p>
    </main>
  )
}

export default HomePage
