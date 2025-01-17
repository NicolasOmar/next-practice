import { FC, useEffect, useState } from 'react'
import Post from '../Post/Post'
// In this case, I am importing an interface to accelerate the information type I will deliver to the component
import { PostDataItem } from '../../interfaces'
import { BASE_URL } from '../../constants'
import postListClasses from './PostList.module.css'

const PostList: FC = () => {
  const [listOfPosts, setListOfPosts] = useState<PostDataItem[]>([])

  /**
   * The useEffect hook is used for different purposes
   * For this case, is used to handle a query call where you are fetching data from a service
   * and setting its data in local-level post list
   * Check effect's second argument, an empty array where all the located dependencies should be located
   * Effect's dependencies are the reactive values (from useState or other hooks) that should be accounted for
   * In case they are referenced inside useEffect's logic
   * For example, if you are using isModalOpen to calculate something, you should put state variable as a dependency
   * to be reviewed by React
   * If is empty, the effect will be executed only when the component starts
   */
  useEffect(() => {
    /**
     * Now here, instead declaring the useEffect function as an async one, I am creating an internal function to handle the fetch call asynchronously
     * Why? Because useEffect does not recommend to handle it in async mode, but it allows to call an internal function that can be executed like that
     * And then, beign called at hook's last line
     */
    const fetchPosts = async () => {
      const postsResponse = await fetch(`${BASE_URL}/posts`)
      const parsedPostsResponse = await postsResponse.json()
      setListOfPosts(parsedPostsResponse.posts)
    }

    fetchPosts()
  }, [])
  // const handleNewPost = (postData: PostDataItem) => {
  //   fetch(`${BASE_URL}/posts`, {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   setListOfPosts(_previousList => [..._previousList, postData])
  //   handleModalDisplay()
  // }

  return (
    <>
      <ul className={postListClasses.posts}>
        <>
          {
            /*
            If you want to display the list of posts or other component, you should use a conditional rendering
            First, you add the boolean that will make that condition
            Then, you explain what will be rendered if the conditional is true and if is false
            In a case where if the boolean isOpen is false, it will render nothing because, you should assign null to the return value
          */
            listOfPosts.length > 0 ? (
              listOfPosts.map((_postData, _postI) => (
                <Post
                  key={_postI}
                  {..._postData}
                />
              ))
            ) : (
              <p>Hello</p>
            )
          }
        </>
      </ul>
    </>
  )
}

export default PostList
