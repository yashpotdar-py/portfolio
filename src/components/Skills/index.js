import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
              strArray={"Skills & Experience".split("")}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Skills
