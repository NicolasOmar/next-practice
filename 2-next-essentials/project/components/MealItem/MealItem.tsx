import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cssClasses from './MealItem.module.css'
import { MealEntity } from '@/ts/interfaces'

interface MealItemProps extends MealEntity {}

const MealItem: FC<MealItemProps> = ({
  title,
  id,
  image,
  summary,
  creator
}) => {
  return (
    <article className={cssClasses.meal}>
      <header>
        <div className={cssClasses.image}>
          {/* The [fill] prop will adjust the image dynamically even when Nexts does not know image's metada at advance (in build time) */}
          <Image
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className={cssClasses.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={cssClasses.content}>
        <p className={cssClasses.summary}>{summary}</p>
        <div className={cssClasses.actions}>
          <Link href={`/meals/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  )
}

export default MealItem
