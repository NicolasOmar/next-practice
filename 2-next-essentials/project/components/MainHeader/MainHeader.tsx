import Link from 'next/link'
// There are some built-in components that Next provides to improve app's performance with specfic tasks such as lady loading (to name one)
import Image from 'next/image'
import MainHeaderBackground from '../MainHeaderBackground/MainHeaderBackground'
import { ROUTES } from '@/constants'
import logoImg from '@/assets/logo.png'
import cssModule from './MainHeader.module.css'
import NavLink from '../NavLink/NavLink'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={cssModule.header}>
        <Link
          href={'/'}
          className={cssModule.logo}
        >
          <Image
            src={logoImg}
            alt='A plate with food in it'
            priority
          />
        </Link>

        <nav className={cssModule.nav}>
          <ul>
            <li>
              <NavLink
                href={ROUTES.MEALS}
                activePath={ROUTES.MEALS}
                activeClass={cssModule.active}
                linkText='Browse Meals'
              />
            </li>
            <li>
              <NavLink
                href={ROUTES.COMMUNITY}
                activePath={ROUTES.COMMUNITY}
                activeClass={cssModule.active}
                linkText='Foodies community'
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
