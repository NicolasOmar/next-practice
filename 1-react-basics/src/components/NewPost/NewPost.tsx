import newPostClasses from './NewPost.module.css'

interface NewPostProps {
  onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NewPost: React.FC<NewPostProps> = ({ onBodyChange, onNameChange }) => {
  return (
    <form className={newPostClasses.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          required
          rows={3}
          // You set the change function to be handled from a parent component, making this a controlled component
          onChange={onBodyChange}
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          id='name'
          required
          onChange={onNameChange}
        />
      </p>
    </form>
  )
}

export default NewPost
