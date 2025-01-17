import { Link } from 'react-router-dom'
import { PostDataItem } from '../../interfaces'
// To use a css module, I have to call it as a component to be used in the jsx/tsx syntaxis
import postClasses from './Post.module.css'

/*
  Adding a <INTERFACE_NAME> in the component type reference will provide its props in a easier way
  (intellisense will do the job to autofill component's possible types according the provided type/interface)
*/
const Post: React.FC<PostDataItem> = ({ id, author, body }) => {
  return (
    /*
      When you call the module class, you add its name, followed by a dot and its internal className (in this case, is .post)

      Why does is this useful? You may ask.
      Is because the generated classes are unique (are beign generated on each component)
    */
    <li className={postClasses.post}>
      <Link to={`${id}`}>
        <p className={postClasses.author}>{author}</p>
        <p className={postClasses.text}>{body}</p>
      </Link>
    </li>
  )
}

export default Post
