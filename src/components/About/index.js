import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faGithub,
  faHtml5,
  faLinux,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About Me".split("")}
            idx={15}
          />
        </h1>
        <p>
          Hello there! I'm Yash Potdar, a second-year B. Tech student immersing
          myself in the fascinating world of Artificial Intelligence and Data
          Science. My passion lies in cybersecurity, where I channel my
          dedication to transforming theoretical knowledge into practical
          applications. I'm committed to seamlessly integrating concepts into
          real-world solutions, and I'm thrilled to share my journey with you.
        </p>

        <p>
          Currently navigating the intricacies of AI and Data Science, I am
          fueled by a curiosity to unravel the complexities of data and leverage
          its power for innovation. My coursework lays a solid foundation, and
          I'm eager to delve deeper into machine learning, deep learning, and
          data analytics. The pursuit of knowledge in these areas drives me, and
          I'm excited about the possibilities they hold for the future.
        </p>

        <p>
          As a tech enthusiast with certificates in web development, Python, and
          IT automation, I go beyond being just a student. I find joy in
          problem-solving through coding and automation, always seeking new
          challenges. Beyond the code, my interest extends into the dynamic
          realm of cybersecurity. The ever-evolving landscape of digital threats
          fuels my passion to understand, combat, and contribute to securing the
          digital world. I firmly believe that a secure cyberspace is the
          foundation of technological progress, and I am dedicated to staying at
          the forefront of this vital field.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#3775A8" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faGithub} color="#000" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faLinux} color="#000" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='line-scale' />    
    </>
  )
}

export default About
