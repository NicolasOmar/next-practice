import { useState, ChangeEvent, FormEvent, FC } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
import newPostClasses from './NewPost.module.css'
import { BASE_URL } from '../../constants'
import { PostDataItem } from '../../interfaces'

const NewPost: FC = () => {
  const [newBody, setNewBody] = useState<string>('')
  const [newAuthor, setNewAuthor] = useState<string>('')

  // On each handler function, you are using the resulting data to set a defined state
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNewBody(event.target.value)
  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewAuthor(event.target.value)
  const handleSubmit = (event: FormEvent) => {
    /*
      To avoid the form from sending an http request (that React alone cannot handle)
      add first a preventDefault() call and it will avoid sending that request
    */
    event.preventDefault()
    const postData = {
      body: newBody,
      author: newAuthor
    }
  }

  return (
    <Modal>
      <form
        className={newPostClasses.form}
        method='post'
      >
        <p>
          <label htmlFor='body'>Text</label>
          <textarea
            id='body'
            name='body'
            required
            rows={3}
            value={newBody}
            // You set the change function to be handled from a parent component, making this a controlled component
            onChange={handleBodyChange}
          />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            value={newAuthor}
            onChange={handleAuthorChange}
          />
        </p>

        <p className={newPostClasses.actions}>
          <Link to={'..'}>Cancel</Link>
          {/* If you do not assign a type for this button, it will work as the submit type one */}
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}

export default NewPost

export const actionNewPost = (actionData: any) => {
  const postData = actionData.request.formData()
  fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
