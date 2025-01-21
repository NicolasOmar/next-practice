import cssClasses from './loading.module.css'
/**
 * A [loading] component is a reserved one for Next. It is used to handle its related page
 * loading state.
 * In this case, this loading state will be only used on the /meals page as in its children and beyond
 * But if you move this file to the root page, it will work the same, but it will be applied for all its children
 */
const MealsPageLoading = () => {
  return <p className={cssClasses.loading}>Loading meals, please wait...</p>
}

export default MealsPageLoading
