'use client'
import { useRouter } from 'next/navigation'

const ModalBackdrop = () => {
  const nextRouter = useRouter()
  return (
    <section
      className='modal-backdrop'
      onClick={nextRouter.back}
    />
  )
}

export default ModalBackdrop
