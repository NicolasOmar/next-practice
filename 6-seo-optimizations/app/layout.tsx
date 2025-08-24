import React, { ReactNode } from 'react'
import Header from '@/components/header'
import './globals.css'

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.'
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
