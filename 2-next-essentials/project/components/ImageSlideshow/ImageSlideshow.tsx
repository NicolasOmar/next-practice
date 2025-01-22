/**
 * This component is using several base React features like useEffect and useState, which are not out-of-the-box compatible with server-side rendering.
 * Therefore, we need to add the 'use client' tag at component's top to be understood as client-side component for Next and be rendered without errors.
 */
'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg'
import dumplingsImg from '@/assets/dumplings.jpg'
import macncheeseImg from '@/assets/macncheese.jpg'
import pizzaImg from '@/assets/pizza.jpg'
import schnitzelImg from '@/assets/schnitzel.jpg'
import tomatoSaladImg from '@/assets/tomato-salad.jpg'
import cssClasses from './ImageSlideshow.module.css'

const loadedImages = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' }
]

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex < loadedImages.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={cssClasses.slideshow}>
      {loadedImages.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? cssClasses.active : ''}
          alt={image.alt}
        />
      ))}
    </section>
  )
}

export default ImageSlideshow
