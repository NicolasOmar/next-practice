import Image from 'next/image'
import cssClasses from './page.module.css'
import { getMeal } from '@/api/meals'
import { FC } from 'react'
import { notFound } from 'next/navigation'

interface MealDetailsPageProps {
  params: {
    mealId: string
  }
}

const MealDetailsPage: FC<MealDetailsPageProps> = async ({ params }) => {
  const meal = await getMeal(params.mealId)

  if (!meal) {
    notFound()
  }

  return (
    <>
      <header className={cssClasses.header}>
        <section className={cssClasses.image}>
          <Image
            src={meal?.image!}
            alt={meal?.title!}
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
