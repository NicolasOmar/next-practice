import { useState, ChangeEvent, FormEvent } from 'react'
import { PostDataItem } from '../../interfaces'
import newPostClasses from './NewPost.module.css'

interface NewPostProps {
  onSubmit: (postData: PostDataItem) => void
  onCancel: () => void
}

const NewPost: React.FC<NewPostProps> = ({ onSubmit, onCancel }) => {
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
    onSubmit(postData)
  }

  return (
    <form
      className={newPostClasses.form}
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
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
          required
          value={newAuthor}
          onChange={handleAuthorChange}
        />
      </p>

      <p className={newPostClasses.actions}>
        <button
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        {/* If you do not assign a type for this button, it will work as the submit type one */}
        <button>Submit</button>
      </p>
    </form>
  )
}

export default NewPost
