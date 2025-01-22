import { MealEntity } from '@/ts/interfaces'
import sql from 'better-sqlite3'
import fs from 'node:fs'

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

export const saveMeal = async (meal: MealEntity, image: File) => {
  const imageExtension = image.name.split('.').pop()
  const fileName = `${meal.title}.${imageExtension}`
  const imageStream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await image.arrayBuffer()
  imageStream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Saving image failed')
    }
  })

  return db
    .prepare(
      'INSERT INTO meals (title, image, summary, creator, creator_email, instructions) VALUES (?, ?, ?, ?, ?, ?)'
    )
    .run(
      meal.title,
      `images/${fileName}`,
      meal.summary,
      meal.creator,
      meal.creator_email,
      meal.instructions
    )
}
