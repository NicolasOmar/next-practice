'use client'
import { useActionState } from 'react'
import ImagePicker from '@/components/ImagePicker/ImagePicker'
import MealsFormSubmit from '@/components/MealsFormSubmit/MealsFormSubmit'
import { shareMealServerAction } from '@/api/actions'
import cssClass from './page.module.css'

const MealsSharePage = () => {
  /**
   * useActionState is a react hook that helps to handle the form submission messages
   * In this case, you can handle error messages through the formState object
   * To use it correctly, you need to pass the server-side action and an object with the initial state
   * And the action reference in the form [action] property will reference the action state rather than the server action itself.
   * To be more graphic, it will go like this
   * form:action => formAction => serverAction
   * A side note: it is a react hook, therefore it will be needed a client-side component to handle it
   */
  const [formState, formAction] = useActionState(shareMealServerAction, {
    message: ''
  })

  return (
    <>
      <header className={cssClass.header}>
        <h1>
          Share your <span className={cssClass.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={cssClass.main}>
        <form
          className={cssClass.form}
          action={formAction}
        >
          <div className={cssClass.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              required
            />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              required
            />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows={10}
              required
            />
          </p>

          <ImagePicker
            label='Meal Image'
            name='image'
          />

          {formState.message && <p>{formState.message}</p>}

          <p className={cssClass.actions}>
            {/**
             * This special component is used to submit the form.
             * But it's not a regular button, it's a component with an internal client-side logic
             * that it has been created to handle the form submission that is server-side.
             * To have in mind, we are creating components with specific client-side logic
             * to avoid injecting it at a page level and isolate only where is needed (and
             * take advantage of Next capabilities as much as we can).
             */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  )
}

export default MealsSharePage
