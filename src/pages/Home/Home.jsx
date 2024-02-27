import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'

import './Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default Home
