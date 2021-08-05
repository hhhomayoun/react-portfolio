import React from 'react'

export default function singleProject({ name, img, description, url, code }) {
  console.log(name, description, img)
  return (
    <div className='single-project'>
      <img src={img} alt='' />
      <div className='single-project-container'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='single-project-footer'>
        <a href={url} className='single-project-btn'>
          go to project
        </a>
        <a href={code} className='single-project-btn'>
          see source code
        </a>
      </div>
    </div>
  )
}
