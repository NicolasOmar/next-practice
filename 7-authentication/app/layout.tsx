import './globals.css'
import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication'
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
