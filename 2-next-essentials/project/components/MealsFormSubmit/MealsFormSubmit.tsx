'use client'
import { useFormStatus } from 'react-dom'

const MealsFormSubmit = () => {
  /**
   * This is a client-side hook because is working at react-dom level, not next nor react itself
   * It helps to handle user interactions with the form, like pending status
   */
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
    >
      {pending ? 'Sharing...' : 'Share Meal'}
    </button>
  )
}

export default MealsFormSubmit
