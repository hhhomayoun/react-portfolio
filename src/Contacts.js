import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
const Contacts = () => {
  return (
    <div className='contacts-section' id='contact'>
      <h2>My Contacts</h2>
      <div className='contacts-info'>
        <div class='single-info'>
          <FaPhone color='hsl(42, 78%, 60%)' />
          <p>(559)930-9728</p>
        </div>
        <div class='single-info'>
          <FaEnvelope color='hsl(42, 78%, 60%)' />
          <p>hhhomayoun@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
