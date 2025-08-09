'use server'
import { redirect } from 'next/navigation'
import { storePost } from '@/lib/posts'
import { ActionErrors } from '@/types/common'

export async function createPost(_: ActionErrors, formData: FormData) {
  let errors: string[] = []
  // To transform an form action into a server action, you need to invoke the "use server" keyword to indicate that this function will be executed on the server
  // In this case, it will not be needed because the actions will be exported to another file to be executed as server-side
  // 'use server'
  const title = formData.get('title') as string
  // const image = formData.get('image') as File | null
  const content = formData.get('content') as string

  if(title.trim().length === 0 || content.trim().length === 0) {
    errors.push('Title or content are required.')
  }

  if(errors.length > 0) {
    return { errors }
  }

  await storePost({
    imageUrl: '',
    title,
    content,
    userId: 1
  })

  redirect('/feed')
}