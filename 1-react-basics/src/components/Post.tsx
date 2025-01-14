import { PostDataItem } from '../interfaces'

const Post: React.FC<PostDataItem> = ({ author, body }) => {
  return (
    <section>
      <p>{author}</p>
      <p>{body}</p>
    </section>
  )
}

export default Post
