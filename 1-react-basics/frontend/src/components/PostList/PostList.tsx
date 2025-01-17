import NewPost from '../NewPost/NewPost'
import Post from '../Post/Post'
import Modal from '../Modal/Modal'
import { PostDataItem } from '../../interfaces'
import postListClasses from './PostList.module.css'

interface PostListProps {
  dataList: PostDataItem[]
  isModalOpen: boolean
  onModalSubmit: (postData: PostDataItem) => void
  onModalExit: () => void
}

const PostList: React.FC<PostListProps> = ({
  dataList,
  isModalOpen,
  onModalSubmit,
  onModalExit
}) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onBackgroundClick={onModalExit}
      >
        <NewPost
          // Here you are using the uplifted onChange methods and handle its returned value as you want
          onSubmit={onModalSubmit}
          onCancel={onModalExit}
        />
      </Modal>
      <ul className={postListClasses.posts}>
        <>
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
