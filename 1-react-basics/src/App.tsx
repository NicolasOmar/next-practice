import Post from './components/Post'
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
