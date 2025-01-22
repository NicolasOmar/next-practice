// All the actions assigned in this file will be treated as server-side actions.
'use server'
import slugify from 'slugify'
import xss from 'xss'
import { redirect } from 'next/navigation'
import { MealEntity } from '@/ts/interfaces'
import { ROUTES } from '@/ts/constants'
import { saveMeal } from './meals'

export const shareMealServerAction = async (
  _: { message: string },
  formData: FormData
) => {
  const title = slugify(formData.get('title') as string, { lower: true })
  const instructions = xss(formData.get('instructions') as string)
  const image = formData.get('image') as File
  const newMeal: Partial<MealEntity> = {
    title,
    summary: formData.get('summary') as string,
    creator: formData.get('creator') as string,
    creator_email: formData.get('creator_email') as string,
    instructions
  }

  if (!title || !instructions || !image) {
    return {
      message: 'Please fill all the fields'
    }
  }

  await saveMeal(newMeal as MealEntity, image)
  redirect(`${ROUTES.MEALS}`)
}
