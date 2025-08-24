import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header id='main-header'>
      <Link href='/'>
        {/* <Image src="/assets/logo.png" alt="Mobile phone with posts feed on it" width={80} height={80} /> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/feed'>Feed</Link>
          </li>
          <li>
            <Link
              className='cta-link'
              href='/new-post'
            >
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
