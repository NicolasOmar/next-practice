import { ROUTES } from '@/ts/constants'
import Link from 'next/link'

export default function Home() {
  return (
    <div id='home'>
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href={ROUTES.NEWS}>Here are the news</Link>
    </div>
  )
}
