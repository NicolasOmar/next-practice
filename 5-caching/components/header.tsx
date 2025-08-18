import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href='/'>NextCaching</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/messages'>Messages</Link>
          </li>
          <li>
            <Link href='/messages/new'>New Message</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
