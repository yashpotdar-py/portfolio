import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { NavLink } from 'react-router-dom'
import TagCloud from 'TagCloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const container = '.tagcloud'
    const texts = [
      'HTML',
      'CSS',
      'Python',
      'JavaScript',
      'React.JS',
      'EJS',
      'Linux',
      'Node.JS',
      'JQuery',
      'Git',
      'GitHub',
    ]
    const options = {
      radius: 200,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: true,
      loop: true,
      lockX: true,
      lockY: true,
    }

    TagCloud(container, texts, options)

    return () => {
      TagCloud(container, [], {})
    }
  }, [])

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills & Experience'.split('')}
              idx={15}
            />
          </h1>
          <p>
            <strong>Technical Skills:</strong> Proficient in Python with a focus
            on building robust and efficient applications. Skilled in HTML, CSS,
            and EJS for creating dynamic and responsive web applications. Solid
            understanding of AI, machine learning, and data analytics, with
            hands-on experience in projects such as{' '}
            <NavLink
              exact="true"
              activaclassname="active"
              className="project-link"
              to="/portfolio"
            >
              Flappy Bird AI
            </NavLink>
            &nbsp;and&nbsp;
            <NavLink
              exact="true"
              activaclassname="active"
              className="project-link"
              to="/portfolio"
            >
              Credit Card Fraud Detection
            </NavLink>
            .
          </p>

          <p>
            <strong>Certifications:</strong> Certified in various Google
            courses, including Crash Course on Python, Using Python to Interact
            with OS, and Troubleshooting and Debugging Techniques on Coursera.
            Proficient in version control using Git and experienced in
            collaborative coding through GitHub.
          </p>

          <p>
            <strong>Experience:</strong> Currently serving as a Technical
            Executive in the Artificial Intelligence Student Association, where
            I've played a key role in organizing technical events and providing
            support for non-technical activities.
          </p>

          <p>
            <strong>Tech Stack:</strong> Expertise in HTML, CSS, and EJS for
            building visually appealing and user-friendly interfaces. Skilled in
            Python, ReactJS, JavaScript, and NodeJS for developing robust
            backend systems. Familiar with Linux Kernels and OS.
          </p>

          <p>
            <strong>Future Aspirations:</strong> My journey is an ongoing
            commitment to continuous learning, exploration, and application of
            cutting-edge technologies. I look forward to taking on new
            challenges and contributing to the ever-evolving world of
            technology.
          </p>
        </div>
        <div className="skills-sphere">
          <span className="tagcloud"></span>
        </div>
      </div>

      <Loader type="line-scale" />
    </>
  )
}

export default Skills
