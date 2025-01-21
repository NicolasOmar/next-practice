import { MealEntity } from '@/interfaces'
import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = () => {
  return db.prepare<MealEntity[], MealEntity>('SELECT * FROM meals').all()
}
