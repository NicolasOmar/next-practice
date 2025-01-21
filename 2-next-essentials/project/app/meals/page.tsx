import { Suspense } from 'react'
import { getMeals } from '@/api/meals'
import Link from 'next/link'
import MealsGrid from '@/components/MealsGrid/MealsGrid'
import cssClasses from './page.module.css'
import { ROUTES } from '@/ts/constants'

const MealsToBeLoaded = async () => {
  /**
   * An important difference from a Next app is how api calls can be made.
   * Instead trying to handle a promise with complex logic, we can simply
   * await the result of the api call by making the component an async one
   */
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

const MealsPage = () => {
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
        {/**
         * Suspense is a component provided for React to handle the loading state of a component in a granular way (in case you want to handle a loading state but in a specific part of the page)
         * If you want to handle it in a global way, you can use the [loading.tsx/jsx] component
         */}
        <Suspense
          fallback={
            <p className={cssClasses.loading}>Loading meals, please wait...</p>
          }
        >
          <MealsToBeLoaded />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
