import { Metadata } from 'next'
import MainHeaderPage from '@/components/MainHeader/MainHeader'
import { METADATA_TITLE } from '@/ts/constants'
import '../globals.css'

/**
 * What happened here is that all routes outside the main one have been moved to a content route
 * This kind of route does not add any extra to the routing engine, but it provides the possiblity of
 * Use a specific [layout] and [not-found] pages for the routes inside that folder (which name should be around parenthesis)
 */

export const metadata: Metadata = {
  title: `${METADATA_TITLE}Page Routing & Rendering`,
  description: 'Learn how to route to different pages.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {/* {children} */}
        <section id='page'>
          <MainHeaderPage />
          {children}
        </section>
      </body>
    </html>
  )
}
