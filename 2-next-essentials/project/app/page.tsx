import { ROUTES } from '@/constants'
import Link from 'next/link'
import ImageSlideshow from '@/components/ImageSlideshow/ImageSlideshow'
import cssClasses from './page.module.css'

const HomePage = () => {
  return (
    <>
      <header className={cssClasses.header}>
        <section className={cssClasses.slideshow}>
          <ImageSlideshow />
        </section>

        <section>
          <section className={cssClasses.hero}>
            <h1>NextLevel foor for NextLevel foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </section>

          <section className={cssClasses.cta}>
            <Link href={`${ROUTES.COMMUNITY}`}>Join the Community</Link>
            <Link href={`${ROUTES.MEALS}`}>Explore Meals</Link>
          </section>
        </section>
      </header>

      <main>
        <section className={cssClasses.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={cssClasses.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}

export default HomePage
