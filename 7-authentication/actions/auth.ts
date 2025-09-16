'use server'

import { createAuthSession } from "@/lib/auth"
import { hashUserPassword } from "@/lib/hash"
import { createUser } from "@/lib/user"
import { redirect } from "next/navigation"

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