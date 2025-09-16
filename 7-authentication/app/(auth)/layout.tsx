import { logout } from '@/actions/auth'
import React, { ReactNode } from 'react'
import '../globals.css'

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
      <form action={logout}>
        <button type='submit'>Logout</button>
      </form>
    </html>
  )
}

export default RootLayout
