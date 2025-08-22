import React from 'react'
import { redirect } from 'next/navigation'
import { addMessage } from '@/lib/messages'
import { revalidatePath, revalidateTag } from 'next/cache'

const NewMessagePage: React.FC = () => {
  async function createMessage(formData: FormData) {
    'use server'
    const message = formData.get('message') as string
    addMessage(message)
    /*
      [revalidatePath] is a way to purge cache oriented to the route you indicate
      all its nested routes data will not be purged by default, you have to include
      a second argument called 'layout' to purge in all the nested pages
      IF you execute the revalidatePath with '/' as first argument (and including 'layout'
      in the second argument), all the nested routes will be revalidated as well.
    */
    revalidatePath('/messages')
    /*
      If you want to revalidate data from a specific fetch call, you can use [revalidateTag]
      it needs only an argument to include the tag and purge its cache once is called
      To include a tag in the fetch data, you have to include the following config
      { next: { tags: ['msg'] } }
      A benefit from this practice is that a tag can be reused in several API fetch calls
      and you can revalidate several caches on different pages without calling several [revalidatePath]
    */
    revalidateTag('msg')
    redirect('/messages')
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className='form-control'>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            name='message'
            required
            rows={5}
          />
        </p>
        <p className='form-actions'>
          <button type='submit'>Send</button>
        </p>
      </form>
    </>
  )
}

export default NewMessagePage
