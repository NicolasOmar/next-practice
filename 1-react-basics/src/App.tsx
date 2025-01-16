import { useState } from 'react'
/*
  - Here goes the list of imports, which can be from
    - other components
    - style files (from css to scss)
    - reusable logic functions (from javascript or typescript)
*/
import MainHeader from './components/MainHeader/MainHeader'
import PostList from './components/PostList/PostList'
// In this case, I am importing an interface to accelerate the information type I will deliver to the component
import { PostDataItem } from './interfaces'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [listOfPosts, setListOfPosts] = useState<PostDataItem[]>([])

  const handleModalDisplay = () => setIsModalOpen(() => !isModalOpen)
  const handleNewPost = (postData: PostDataItem) => {
    setListOfPosts(_previousList => [..._previousList, postData])
    handleModalDisplay()
  }

  return (
    <main>
      <MainHeader onCreatePost={handleModalDisplay} />
      <PostList
        dataList={listOfPosts}
        isModalOpen={isModalOpen}
        onModalSubmit={handleNewPost}
        onModalExit={handleModalDisplay}
      />
    </main>
  )
}

export default App
