'use client'

import { FC } from 'react'
import { useFormStatus } from 'react-dom'

const FormSubmit: FC = () => {
  /*
    Here we are handling a form submission component based on the
    useFormStatus hook from React
    The hook provides information about the form's submission status. (having in mind is related to its parent form)
  */
  const { pending } = useFormStatus()

  return pending ? (
    'Submitting'
  ) : (
    <>
      <button type='reset'>Reset</button>
      <button>Create Post</button>
    </>
  )
}

export default FormSubmit
