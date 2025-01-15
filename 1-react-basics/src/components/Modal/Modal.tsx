import { FC, ReactElement } from 'react'
import modalClasses from './Modal.module.css'

interface ModalProps {
  children: ReactElement
  isOpen: boolean
  onBackgroundClick: () => void
}

const Modal: FC<ModalProps> = ({ children, isOpen, onBackgroundClick }) => {
  return (
    <>
      {
        /*
          To display the background only if the modal is open, I added a conditional rendering
          First, you add the boolean that will make that condition
          Then, you explain what will be rendered if the conditional is true and if is false
          In this case, if the boolean isOpen is false, it will render nothing because is null
        */
        isOpen ? (
          <section
            className={modalClasses.backdrop}
            onClick={() => onBackgroundClick()}
          />
        ) : null
      }
      <dialog
        className={modalClasses.modal}
        open={isOpen}
      >
        {children}
      </dialog>
    </>
  )
}

export default Modal
