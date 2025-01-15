import NewPost from '../NewPost/NewPost'
import Post from '../Post/Post'
import { PostDataItem } from '../../interfaces'
import postListClasses from './PostList.module.css'
import { ChangeEvent, useState } from 'react'
import Modal from '../Modal/Modal'

const PostList: React.FC<{ dataList: PostDataItem[] }> = ({ dataList }) => {
  const [newBody, setNewBody] = useState<string>('')
  const [newAuthor, setNewAuthor] = useState<string>('')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  // On each handler function, you are using the resulting data to set a defined state
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setNewBody(event.target.value)
  const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewAuthor(event.target.value)
  const handleModalOpenState = () => setModalIsOpen(() => !modalIsOpen)

  return (
    <>
      <button onClick={handleModalOpenState}>New Post</button>
      <Modal
        isOpen={modalIsOpen}
        onBackgroundClick={handleModalOpenState}
      >
        <NewPost
          // Here you are using the uplifted onChange methods and handle its returned value as you want
          onBodyChange={handleBodyChange}
          onNameChange={handleAuthorChange}
        />
      </Modal>
      <ul className={postListClasses.posts}>
        <>
          <Post
            /*
              Every time the user changes the NewPost inputs,
              its updated values will update this post because its values are based on
              its parent states
            */
            body={newBody}
            author={newAuthor}
          />

          {dataList.map((_postData, _postI) => (
            <Post
              key={_postI}
              {..._postData}
            />
          ))}
        </>
      </ul>
    </>
  )
}

export default PostList
