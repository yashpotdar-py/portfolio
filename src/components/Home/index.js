import './index.scss'
import LogoTitle from '../../assets/images/Y.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 's', 'h']
  const jobArray = [
    'd',
    'e',
    'v',
    'l',
    'o',
    'p',
    'e',
    'r',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="devloper" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Python Programmer | Web Devloper | Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />

      </div>
      <Loader type='line-scale' />
    </>
  )
}

export default Home
