import './Project.css'

const Project = ({ item }) => {
  return (
    <article className='project-container'>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <p>{item.footer}</p>
    </article>
  )
}

export default Project
