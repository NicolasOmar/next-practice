import { Metadata } from 'next'
import MainHeaderPage from '@/components/MainHeader/MainHeader'
import { METADATA_TITLE } from '@/ts/constants'
import './globals.css'

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
        <section id='page'>
          <MainHeaderPage />
          {children}
        </section>
      </body>
    </html>
  )
}
