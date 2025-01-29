import { Metadata } from 'next'
import { METADATA_TITLE } from '@/ts/constants'
// I added a level up to the import path because this import is in a folder below the root
import '../globals.css'

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
      <body>{children}</body>
    </html>
  )
}
