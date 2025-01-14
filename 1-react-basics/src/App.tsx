/*
  - Here goes the list of imports, which can be from
    - other components
    - style files (from css to scss)
    - reusable logic functions (from javascript or typescript)
*/
import Post from './components/Post'
// In this case, I am importing an interface to accelerate the information type I will deliver to the component
import { PostDataItem } from './interfaces'

const postsData: PostDataItem[] = [
  { author: 'Nicolas', body: 'This is awesome' },
  { author: 'Omar', body: 'This is boring' },
  { author: 'Martin', body: 'This was strange' },
  { author: 'Maximilian', body: 'This is should be reviewed' }
]

function App() {
  return postsData.map(_postData => <Post {..._postData} />)
}

export default App
