import { FC } from 'react'
import cssClass from './MealsGrid.module.css'
import MealItem from '../MealItem/MealItem'
import { MealEntity } from '@/ts/interfaces'

interface MealsGridProps {
  meals: MealEntity[]
}

const MealsGrid: FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={cssClass.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}

export default MealsGrid
