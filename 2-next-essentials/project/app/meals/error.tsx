/**
 * A funny thing about Next error components, is mandatory to be a client-side component.
 * The reason is because it needs to handle any kind of error that can be thrown by the page or its children.
 */
'use client'
/**
 * An [error.tsx/jsx] component is another reserved NextJs component.
 * On this case, is used to handle any error that occurs in the page or its children.
 */
const MealsPageError = () => {
  return (
    <main className='error'>
      <h1>An error ocurred</h1>
      <p>Failed to fetch meal data. Please try again later</p>
    </main>
  )
}

export default MealsPageError
