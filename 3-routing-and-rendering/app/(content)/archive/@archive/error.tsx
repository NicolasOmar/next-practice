'use client'

import { FC } from 'react'

interface FilterErrorPageProps {
  error: Error
}

/**
 * An Error page must be a client component because an error can happen on the client side, therefore, it should be renderer from the client side (browser)
 */
const FilterErrorPage: FC<FilterErrorPageProps> = ({ error }) => {
  return (
    <div id='error'>
      <h2>An error ocurred</h2>
      <p>{error.message}</p>
    </div>
  )
}

export default FilterErrorPage
