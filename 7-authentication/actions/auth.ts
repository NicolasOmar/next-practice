'use server'

import { createAuthSession, destroyAuthSession } from "@/lib/auth"
import { hashUserPassword, verifyPassword } from "@/lib/hash"
import { createUser, getUserByEmail } from "@/lib/user"
import { redirect } from "next/navigation"
import type { AuthModeType } from "../types"

export async function signup(_: unknown, formData: FormData): Promise<{ errors?: string[] } | void> {
  const email = formData.get('email')
  const password = formData.get('password')
  let errors = []

  if (!email || email === null || typeof email !== 'string' || !email.includes('@')) {
    errors.push('Please enter a valid email address.')
  }

  if (!password || password === null || typeof password !== 'string' || password.trim().length < 6) {
    errors.push('Please enter a valid password (at least 6 characters).')
  }

  if (errors.length) {
    return { errors }
  } else {
    const hashedPassword = hashUserPassword(password as string)
    
    try {
      const userResponse = await createUser(email as string, hashedPassword)
      await createAuthSession(userResponse.id.toString())

      redirect('/training')
    } catch (error) {
      return { errors: ['User already exists.'] }
    }
  }
}

export async function login(_: unknown, formData: FormData): Promise<{ errors?: string[] } | void> {
  const email = formData.get('email')
  const password = formData.get('password')
  let errors = []

  if (!email || email === null || typeof email !== 'string' || !email.includes('@')) {
    errors.push('Please enter a valid email address.')
  }

  if (!password || password === null || typeof password !== 'string' || password.trim().length < 6) {
    errors.push('Please enter a valid password (at least 6 characters).')
  }

  if (errors.length) {
    return { errors }
  } 
  
  const userResponse = await getUserByEmail(email as string)
  console.warn(userResponse)
  if (!userResponse) {
    return { errors: ['Invalid email or password.'] }
  } else {
    const isValidPassword = verifyPassword(userResponse.password, password as string)

    if (!isValidPassword) {
      return { errors: ['Invalid email or password.'] }
    }

    await createAuthSession(userResponse.id)
    redirect('/training')
  }
}

export async function auth(mode: AuthModeType, _: unknown, formData: FormData) {
  if (mode === 'login') {
    return login(_, formData)
  } else {
    return signup(_, formData)
  }
}

export async function logout() {
  await destroyAuthSession()
  return redirect('/')
}