import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Y.png'
import LogoSubtitle from '../../assets/images/Y_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faEye,
  faHome,
  faSuitcase,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="yash" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activaclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activaclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activaclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color='"#4d4d4e' />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activaclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faEye} color='"#4d4d4e' />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activaclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
          />
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yashyogeshpotdar/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/yashpotdar-py"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/yash.potdar7/"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  )
}
export default Sidebar
