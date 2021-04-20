import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
function Footer() {
  return (
    <footer class='footer'>
      <ul class='social-icons'>
        <li>
          <a
            href='https://www.linkedin.com/in/homayoun-ostadhossein-91b996163/'
            class='social-icon'
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/hhhomayoun' class='social-icon'>
            <FaGithub />
          </a>
        </li>
      </ul>

      <p>
        &copy;<span>{new Date().getFullYear()}</span> Homayoun Ostad. all rights
        reserved
      </p>
    </footer>
  )
}

export default Footer
