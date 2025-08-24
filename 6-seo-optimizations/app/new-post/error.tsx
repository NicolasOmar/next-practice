import React from 'react'

interface NewPostErrorProps {
  error: Error
}

const NewPostError: React.FC<NewPostErrorProps> = ({ error }) => {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  )
}

export default NewPostError
