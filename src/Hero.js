import React from 'react'
import image from './images/IMG_2691.JPG'
import { useGlobalContext } from './context'
import Slider from './Slider'
const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-center'>
        <section className='hero-info'>
          <img src={image} alt='' />
          <h1>Homayoun Ostad</h1>
          <h4>Front End Developer</h4>
          <button type='button' className='btn'>
            My Projects
          </button>
          <button type='button' className='btn'>
            My Resume
          </button>
        </section>
        <section className='section'>
          <div className='title'>
            <h2>My Skills</h2>
          </div>
          <div className='section-center'>
            <Slider />
          </div>
        </section>
      </div>
    </section>
  )
}
export default Hero
