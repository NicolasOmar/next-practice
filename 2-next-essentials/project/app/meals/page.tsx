import { getMeals } from '@/api/meals'
import Link from 'next/link'
import cssClasses from './page.module.css'
import { ROUTES } from '@/constants'
import MealsGrid from '@/components/MealsGrid/MealsGrid'

const MealsPage = async () => {
  /**
   * An important difference from a Next app is how api calls can be made.
   * Instead trying to handle a promise with complex logic, we can simply
   * await the result of the api call by making the component an async one
   */
  const meals = await getMeals()

  return (
    <>
      <header className={cssClasses.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={cssClasses.highlight}>by you</span>
        </h1>

        <p>Choose your favorite recite and cook it yourself.</p>

        <p className={cssClasses.cta}>
          <Link href={ROUTES.MEALS_SHARE}>Share your recipe</Link>
        </p>
      </header>

      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}

export default MealsPage
