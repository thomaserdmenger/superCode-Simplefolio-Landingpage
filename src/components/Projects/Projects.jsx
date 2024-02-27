import './Projects.css'
import Project from '../Project/Project'
import data from '../../assets/data.js'

const Projects = () => {
  return (
    <section className='projects-section'>
      <h2>Projects</h2>
      <div>
        {data.map((item, index) => {
          return (
            <Project
              item={item}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
