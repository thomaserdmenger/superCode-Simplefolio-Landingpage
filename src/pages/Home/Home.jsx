import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'

import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
