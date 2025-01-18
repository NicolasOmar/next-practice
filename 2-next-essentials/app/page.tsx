import Link from 'next/link'
// Component import is the same as in React
// The @ is a path alias that points to the root folder, it can configured in the next config for a tailored path
import CustomHeader from '@/components/customHeader'

// SERVER COMPONENT, a regular conponent that Next ensures it must be rendered in the server
export default function Home() {
  /**
   * In this case, the console it will be rendered not in the browser
   * but in the terminal where the server is running
   */
  // console.log('test')
  return (
    <main>
      <CustomHeader />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/**
         * Similar to react routing, a Link component will redirect the user
         * without reloading the page, maintaining as a single page application
         */}
        <Link href='/about'>About me</Link>
      </p>
    </main>
  )
}
