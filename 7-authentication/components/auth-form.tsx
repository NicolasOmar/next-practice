'use client'
import Link from 'next/link'
import React from 'react'
// Because we are using a hook, we need to make the form a client component
// And include 'use client' at the top of the file
import { useFormState } from 'react-dom'
// With the auth action, we can execute the same function that will run the true one on the server side
// After getting the mode from the .bind function
import { auth } from '../actions/auth'
import { AuthModeType } from '@/types'

const AuthForm: React.FC<{ mode: AuthModeType }> = ({ mode }) => {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {})

  return (
    <form
      id='auth-form'
      action={formAction}
    >
      <div>
        <img
          src='/images/auth-icon.jpg'
          alt='A lock icon'
        />
      </div>
      <p>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
        />
      </p>
      <p>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
        />
      </p>
      {formState?.errors && (
        <p style={{ color: 'red' }}>
          {formState.errors.map(error => (
            <span key={error}>
              {error}
              <br />
            </span>
          ))}
        </p>
      )}
      <p>
        <button type='submit'>Create Account</button>
      </p>
      <p>
        {mode === 'login' ? (
          <Link href='/auth?mode=signup'>Create new account</Link>
        ) : (
          <Link href='/auth?mode=login'>Login with existing account</Link>
        )}
      </p>
    </form>
  )
}

export default AuthForm
