import { MealEntity } from '@/ts/interfaces'
import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = () => {
  return db.prepare<MealEntity[], MealEntity>('SELECT * FROM meals').all()
}

export const getMeal = (id: string) => {
  // In order to avoid SQL injection, we should use the method mentioned below instead injecting the id directly into the query
  return db
    .prepare<string, MealEntity>('SELECT * FROM meals WHERE id = ?')
    .get(id)
}
