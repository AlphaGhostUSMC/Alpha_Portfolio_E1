import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
          idx={15}
          />
        </h1>
        <p> 
            I'm very ambitious Computer Engineer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
        </p>
        <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
        </p>
        <p>
            Result driven System Administrator with 8 Years of experience managing server
            infrastructures and data-center operations across Windows, Linux, and Mac OS X
            platforms. Effectively plan, install, configure and optimize IT infrastructures to achieve
            high availability and performance.
        </p>
      </div>
    </div>
  )
}

export default About