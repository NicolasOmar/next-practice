import Header from '@/components/header'
import { METADATA_TITLE } from '@/ts/constants'
import './globals.css'

export const metadata = {
  title: `${METADATA_TITLE}Working with APIs | Mutations`,
  description: 'Learn how to integrate APIs to your page.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
