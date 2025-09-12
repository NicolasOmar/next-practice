import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'

const Header: React.FC = () => {
  return (
    <header id='main-header'>
      <Link href='/'>
        {/*
          The priority property will make Next preload this image as first thing
          (instead its default behaviour which is lazy loading)
          The width and height properties are also important for performance and
          can be loaded from image's metadata or putting a fixed value

        */}
        <Image
          src={logo.src}
          alt='Mobile phone with posts feed on it'
          width={logo.width}
          height={logo.height}
          priority
        />
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
