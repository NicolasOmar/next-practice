/**
 * Each page in Next needs to be inside a folder with the same name as the route
 * Just to understand
 * app
 *  /about
 *    /page.tsx => this is the page (needs that name) where it will render the requested components
 *  page.tsx => this is the main page
 * ---
 * Each page needs to be named page.tsx/jsx to be recognized by Next
 */
const AboutPage = () => {
  return (
    <main>
      <p>About me</p>
    </main>
  )
}

export default AboutPage
