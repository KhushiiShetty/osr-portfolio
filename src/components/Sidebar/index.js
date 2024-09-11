import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/kslogo.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className = "logo" to="/">
            <img src = {LogoS} alt = "logo"/>
            {/* <img className="sub-logo" src = {LogoSubtitle} alt = "slobodan"/> */}

        </Link>
        <nav>
            <NavLink exact = "true" activeclassname = "active" to="/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className="portfolio-link" to="/portfolio" >
                <FontAwesomeIcon icon={faSuitcase} color = "#4d4d4e" />
            </NavLink>
            

        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/khushii-shetty-0538012b5/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/KhushiiShetty'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            
        </ul>

    </div>
)

export default Sidebar
