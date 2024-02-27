import DarkLightMode from '../DarkLightMode/DarkLightMode'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <a href='#'>JS.</a>
      <nav>
        <a href='#'>projects</a>
        <a href='#'>skills</a>
        <a href='#'>contact</a>
        <a href=''>
          <DarkLightMode />
        </a>
      </nav>
    </header>
  )
}

export default Navbar
