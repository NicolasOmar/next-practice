'use client'

import { FC, useActionState } from 'react'
import FormSubmit from './formSubmit'
import { ActionErrors } from '@/types/common'

interface PostFormProps {
  action: (
    prevState: ActionErrors,
    formData: FormData
  ) => ActionErrors | Promise<ActionErrors>
}

/**
 * I moved the NewPostPage form to a client component due its usage of "useActionState"
 * which demands to be used in a client-side component and cannot be used in server components.
 */
const PostForm: FC<PostFormProps> = ({ action }) => {
  const [state, formAction] = useActionState<ActionErrors, FormData>(action, {
    errors: []
  })

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className='form-control'>
          <label htmlFor='title'>Title</label>
          {/* Have in mind that each input needs a name attribute to work with FormData */}
          <input
            type='text'
            id='title'
            name='title'
          />
        </p>
        <p className='form-control'>
          <label htmlFor='image'>Image URL</label>
          <input
            type='file'
            accept='image/png, image/jpeg'
            id='image'
            name='image'
          />
        </p>
        <p className='form-control'>
          <label htmlFor='content'>Content</label>
          <textarea
            id='content'
            name='content'
            rows={5}
          />
        </p>
        <p className='form-actions'>
          <FormSubmit />
        </p>
      </form>
      {/* In case the state shows any errors, it will display them on a list (based on the useActionState) */}
      {state.errors.length > 0 && (
        <ul className='error-list'>
          {state.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default PostForm
