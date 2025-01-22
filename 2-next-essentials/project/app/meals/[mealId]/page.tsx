import { FC } from 'react'
import { getMeal } from '@/api/meals'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { METADATA_TITLE } from '@/ts/constants'
import cssClasses from './page.module.css'

interface MealDetailsPageProps {
  /**
   * A Page-level component interface needs to have a params object (in case you need it)
   * That object needs to be a promise that will return the object you want to be sended
   * And that promised object will be awaited in the component
   * Fix source: https://stackoverflow.com/questions/78714934/typescript-error-using-useactionstate-following-nextjs-tutorial
   */
  params: Promise<{ mealId: string }>
}

/**
 * On this scenario, I am using the metadata function to generate the metadata for the page
 * in a dynamic way. First it will get meals data from the params object
 * And once obtained (or not, in case the provided data fails), it will generate the requested metadata.
 */
export async function generateMetadata({ params }: MealDetailsPageProps) {
  const awaitedParams = await params
  const meal = await getMeal(awaitedParams.mealId)

  return {
    title: `${METADATA_TITLE}${meal?.title ?? 'Meal'}`,
    description: meal?.summary ?? 'A delicious meal'
  }
}

const MealDetailsPage: FC<MealDetailsPageProps> = async ({ params }) => {
  const awaitedParams = await params
  const meal = await getMeal(awaitedParams.mealId)

  if (!meal) {
    notFound()
  }

  return (
    <>
      <header className={cssClasses.header}>
        <section className={cssClasses.image}>
          <Image
            src={meal?.image ?? undefined}
            alt={meal?.title ?? undefined}
            fill
          />
        </section>

        <section className={cssClasses.headerText}>
          <h1>{meal?.title}</h1>
          <p className={cssClasses.creator}>
            by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
          </p>
          <p className={cssClasses.summary}>{meal?.summary}</p>
        </section>
      </header>

      <main>
        <p
          className={cssClasses.instructions}
          dangerouslySetInnerHTML={{ __html: meal?.instructions ?? '-' }}
        />
      </main>
    </>
  )
}

export default MealDetailsPage
