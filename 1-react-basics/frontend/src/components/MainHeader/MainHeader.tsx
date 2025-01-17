import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MdPostAdd, MdMessage } from 'react-icons/md'
import classes from './MainHeader.module.css'

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link
          className={classes.button}
          to='/create-post'
        >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  )
}

export default MainHeader
