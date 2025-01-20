/**
 * I added the use client reference because I separated this particular link from the rest to use in a small piece of the project
 * The idea is to add this kind of components (which needs client-side features) for specific cases (and make them more fficient)
 */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavLinkProps {
  href: string
  activePath: string
  activeClass: string
  linkText: string
}

const NavLink: FC<NavLinkProps> = ({
  href,
  activePath,
  activeClass,
  linkText
}) => {
  const path = usePathname()
  return (
    <Link
      href={href}
      className={path.startsWith(activePath) ? activeClass : undefined}
    >
      {linkText}
    </Link>
  )
}

export default NavLink
