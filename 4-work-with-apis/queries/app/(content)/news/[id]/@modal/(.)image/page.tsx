/**
 * This is an interceptor route, will be used to intercept the user once it has entered to this route
 * '/news/[id]/image'
 * This page will be rendered only when the user enters to the located route
 * If the user refreshs the page, it will be avoid the interceptor
 *
 * The (.) before the image name is making reference the path and its location
 * If you want to reffer to a path one-level up, you can use (..)
 * (is similar to the path references when we import tools to our file)
 * In this particular case where the '(.)image' is inside a parallel route, is not neccessary to use (..) to reffer to the parent route
 */

import { FC } from 'react'
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '@/db/dummy-data'
import ModalBackdrop from '@/components/ModalBackdrop/ModalBackdrop'
import { getNewsItem } from '@/functions/news'

interface NewsImageInterceptorPageProps {
  params: Promise<{ id: string }>
}

const NewsImageInterceptorPage: FC<NewsImageInterceptorPageProps> = async ({
  params
}) => {
  const { id } = await params
  const newsItem = await getNewsItem(id)

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <ModalBackdrop />
      <dialog
        className='modal'
        open
      >
        <section className='fullscreen-image'>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </section>
      </dialog>
    </>
  )
}

export default NewsImageInterceptorPage
