import React from 'react'
import image from './images/IMG_2691.JPG'
// import { Link } from 'react-scroll'
// import Resume from './resume'
// import { Link } from 'react-router-dom'
import Slider from './Slider'
const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-center'>
        <section className='hero-info'>
          <img src={image} alt='' />
          <h1>Homayoun Ostad</h1>
          <h4>Front End Developer</h4>
          {/* <div className='hero-btns'>
            <Link to='projects' smooth={true} duration={1000}>
              <button type='button' className='btn'>
                My Projects
              </button>
            </Link>
          </div> */}
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
