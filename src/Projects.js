import React from 'react'
import { projects } from './projectsData'
import SingleProject from './singleProject'

const Projects = () => {
  const [project, setProject] = React.useState(projects)
  console.log(project)
  return (
    <div className='projects-section' id='projects'>
      <h1>my projects</h1>
      <div className='projects-center'>
        {project.map((item) => {
          return <SingleProject key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Projects
