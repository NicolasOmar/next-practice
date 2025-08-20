import React, { ReactNode } from 'react'
import Header from '@/components/header'
import './globals.css'

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works'
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
