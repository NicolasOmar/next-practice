import { PostDataItem } from '../interfaces'
// To use a css module, I have to call it as a component to be used in the jsx/tsx syntaxis
import postClasses from './Post.module.css'

/*
  Adding a <INTERFACE_NAME> in the component type reference will provide its props in a easier way
  (intelicense will do the job to autofill component's possible types according the provided type/interface)
*/
const Post: React.FC<PostDataItem> = ({ author, body }) => {
  return (
    /*
      When you call the module class, you add its name, followed by a dot and its internal className (in this case, is .post)
    */
    <section className={postClasses.post}>
      <p className={postClasses.author}>{author}</p>
      <p className={postClasses.text}>{body}</p>
    </section>
  )
}

export default Post
