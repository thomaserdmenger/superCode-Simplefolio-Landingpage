import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'

import './Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}

export default Home
