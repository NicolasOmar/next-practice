import { FC, PropsWithChildren, ReactNode } from 'react'

interface NewsDetailLayoutProps extends PropsWithChildren {
  /**
   * Have in mind that modal is reffering the @modal parallel route at the same level that the layout.tsx file
   */
  modal: ReactNode
}

const NewsDetailLayout: FC<NewsDetailLayoutProps> = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default NewsDetailLayout
