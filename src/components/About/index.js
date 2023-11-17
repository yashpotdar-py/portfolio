import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
              strArray={'About Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            <strong>Introduction:</strong> Welcome to my corner of the digital
            world! I'm Yash Potdar, a second-year B. Tech student with a
            profound passion for technology and a keen interest in Artificial
            Intelligence and Data Science.
          </p>

          <p>
            <strong>Education:</strong> Currently, I am pursuing my Bachelor's
            in Technology with a major in Artificial Intelligence and Data
            Science at AISSMS IOIT. My coursework not only provides a strong
            theoretical foundation but also sparks my curiosity to explore the
            intricacies of AI, machine learning, deep learning, and data
            analytics.
          </p>

          <p>
            <strong>Tech Enthusiast:</strong> As a tech enthusiast, I find joy
            in coding and problem-solving. I hold certificates in web
            development, Python, and IT automation, showcasing my commitment to
            mastering various facets of the digital realm. I thrive on tackling
            new challenges, constantly seeking opportunities to expand my skill
            set and explore innovative solutions.
          </p>

          <p>
            <strong>Cybersecurity Passion:</strong> Beyond the code, my passion
            extends into the dynamic domain of cybersecurity. I am dedicated to
            understanding, combatting, and contributing to securing the digital
            world. I firmly believe that a secure cyberspace is the bedrock of
            technological progress, and I am committed to staying at the
            forefront of this vital field.
          </p>

          <p>
            Join me on this journey of exploration and growth as I navigate the
            ever-evolving landscape of technology. Let's connect, collaborate,
            and learn together!
            <br />
            <NavLink
              exact="true"
              activaclassname="active"
              className="aboutme-link"
              target="_blank"
              to="https://www.linkedin.com/in/yashyogeshpotdar/"
            >
              View my LinkedIn Profile
            </NavLink>
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
      <Loader type="line-scale" />
    </>
  )
}

export default About
