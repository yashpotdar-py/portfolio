import Loader from 'react-loaders'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt={portfolio}
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <p className="portfolio-title">{port.title}</p>
                <h4 className="portfolio-description">{port.description}</h4>
                <button
                  className="portfolio-btn"
                  onClick={() => window.open(port.url)}
                >
                  VIEW
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
      </div>

      <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
