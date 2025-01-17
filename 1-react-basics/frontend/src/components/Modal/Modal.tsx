import { FC, ReactElement } from 'react'
import modalClasses from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

interface ModalProps {
  children: ReactElement
}

const Modal: FC<ModalProps> = ({ children }) => {
  // useNavigate is a hook that allows to navigate to a specific route
  const navigate = useNavigate()
  const closeHandler = () => {
    // on this handler method, it will redirect the user to a previous route
    navigate('..')
  }

  return (
    <>
      <section
        className={modalClasses.backdrop}
        onClick={closeHandler}
      />
      <dialog
        className={modalClasses.modal}
        open
      >
        {children}
      </dialog>
    </>
  )
}

export default Modal
