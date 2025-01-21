'use client'
import { FC, useState, useRef } from 'react'
import Image from 'next/image'
import cssClass from './ImagePicker.module.css'

interface ImagePickerProps {
  label: string
  name: string
}

const ImagePicker: FC<ImagePickerProps> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  /**
   * Any event handler injected in a component will require that your component
   * to be a client-side one.
   * User interactions are client-side events, so they will only work in client-side
   */
  const handleImagePick = () => {
    inputRef.current?.click()
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }
  }

  return (
    <section className={cssClass.picker}>
      <label htmlFor={name}>{label}</label>
      <section className={cssClass.controls}>
        <section className={cssClass.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt='Picked Image'
              fill
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </section>
        <input
          type='file'
          id={name}
          name='image'
          accept='image/pgn, image/jpeg'
          required
          className={cssClass.input}
          ref={inputRef}
          onChange={handleImageChange}
        />
      </section>

      <button
        className={cssClass.button}
        type='button'
        onClick={handleImagePick}
      >
        Pick an Image
      </button>
    </section>
  )
}

export default ImagePicker
