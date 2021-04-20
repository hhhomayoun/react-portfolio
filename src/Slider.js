import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useGlobalContext } from './context'
const Slider = () => {
  const { skill } = useGlobalContext()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = skill.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, skill])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 2000)
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
      <button
        type='button'
        className='prev'
        onClick={() => setIndex(index - 1)}
      >
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  )
}
export default Slider
