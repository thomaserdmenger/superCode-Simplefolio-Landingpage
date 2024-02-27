import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
      <h1>
        Hi, I am <span>John Smith.</span>
      </h1>
      <p>A Front End Developer.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum
        odio perferendis deserunt libero consectetur quidem debitis qui?
        Excepturi aut iste id ratione, quam suscipit!
      </p>
      <a
        className='btn'
        href='#'>
        resume
      </a>
    </section>
  )
}

export default Hero
