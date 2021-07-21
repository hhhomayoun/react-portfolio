import React, { useRef, useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const { toggleLinks, showLinks } = useGlobalContext()
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    console.log(offset)
    if (offset > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(() => {
    const linksHeigth = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeigth}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={Logo} className='logo' alt='' /> */}
          <h2>Homayoun Ostad</h2>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='nav-links' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
              <Link to='home' smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li>
              <Link to='projects' smooth={true} duration={1000}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={1000}>
                About me
              </Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={1000}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
