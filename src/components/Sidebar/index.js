import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoY from '../../assets/images/Logo-Y.png'
import LogoSubtitle from '../../assets/images/Logo-FN.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
      <Link className="logo" to="/">
         <img src={LogoY} alt="logo" />
         <img className="sub-logo" src={LogoSubtitle} alt="yogesh" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink><NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink><NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
      <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/AlphaGhostUSMC">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayogeshkumar">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://discord.com/users/QWxwaGEgU2lsdmVyYmFjaw==#2527">
          <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://wa.me/918754323656">
          <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://leetcode.com/AlphaGhostUSMC/">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar