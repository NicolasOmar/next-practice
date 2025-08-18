'use server'
import { redirect } from 'next/navigation'
import { storePost, updatePostLikeStatus } from '@/lib/posts'
import { ActionErrors } from '@/types/common'
import { uploadImage } from '@/lib/cloudinary'
import { revalidatePath } from 'next/cache'

export async function createPost(_: ActionErrors, formData: FormData) {
  let errors: string[] = []
  // To transform an form action into a server action, you need to invoke the "use server" keyword to indicate that this function will be executed on the server
  // In this case, it will not be needed because the actions will be exported to another file to be executed as server-side
  // 'use server'
  const title = formData.get('title') as string
  const image = formData.get('image') as File | null
  const content = formData.get('content') as string

  if(title.trim().length === 0 || content.trim().length === 0 || image === null) {
    errors.push('Title, content, and image are required.')
  }

  if(errors.length > 0) {
    return { errors }
  }

  try {
    const imageUrl = await uploadImage(image as File)
  
    await storePost({
      imageUrl,
      title,
      content,
      userId: 1
    })
  
    redirect('/feed')
  } catch (e) {
    errors.push('Image upload failed.')
    return { errors }
  }
}

export async function toggleLikePost(postId: number) {
  await updatePostLikeStatus(postId, 2)
  /*
    When you are changing the like status of a post, you need to revalidate the path
    to refresh the cache and update the related posts UI
  */
  revalidatePath('/', 'layout')
}