import { FC, PropsWithChildren, ReactNode } from 'react'

interface ArchiveNewsLayoutProps extends PropsWithChildren {
  archive: ReactNode
  latest: ReactNode
}

/**
 * On this layout, we are going to display two parallel routes from archive folder
 * Those routes are archive and latest, which you can see in the folder structure followed by a '@'
 * The idea of those routes is to display both of them at the same layout
 */
const ArchiveNewsLayout: FC<ArchiveNewsLayoutProps> = ({ archive, latest }) => {
  return (
    <section>
      <h1>News Archive</h1>
      <section id='archive-filter'>{archive}</section>
      <section id='archive-latest'>{latest}</section>
    </section>
  )
}

export default ArchiveNewsLayout
