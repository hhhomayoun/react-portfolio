import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Contacts from './Contacts'
import About from './About'
import Scroll from './Scroll'
import Footer from './Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contacts />
      <Footer />
      <Scroll showBelow={250} />
    </>
  )
}
export default App
