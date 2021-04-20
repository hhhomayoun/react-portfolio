import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useGlobalContext } from './context'
const Slider = () => {
  const { skill } = useGlobalContext()
  const [index, setIndex] = useState(0)
  const prevSlide = () => {
    console.log('prev')
  }
  const nextSlide = () => {
    console.log('next')
  }
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 4000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <>
      {skill.map((item, itemIndex) => {
        let position = 'nextSlide'
        if (itemIndex === index) {
          position = 'activeSlide'
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === item.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <article className={position} key={item.id}>
            <h4 className='slider-skill'>{item.name}</h4>
          </article>
        )
      })}
      <button className='prev' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </>
  )
}
export default Slider
