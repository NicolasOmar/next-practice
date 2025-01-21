/**
 * An [not-found.tsx/jsx] component is another reserved NextJs component.
 * On this case, is used to handle any user redirection on a not mapped url.
 * In case the user goes to any url that doesn't exist, this component will be rendered.
 */
const MealsPageNotFound = () => {
  return (
    <main className='not-found'>
      <h1>An error ocurred</h1>
      <p>We couldn't find any kind of information for this specific URL.</p>
    </main>
  )
}

export default MealsPageNotFound
