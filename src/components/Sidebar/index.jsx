import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faFolder, faHome, faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngellist,
  faGithub,
  faLinkedin,
  faSkype,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import LogoN from '../../assets/images/logo-n.png';
import LogoSubtitle from '../../assets/images/logo_sub_n.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoN} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="nicolae pop" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicolae-pop/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nicupop729"
        >
          <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://angel.co/u/nicupop729"
        >
          <FontAwesomeIcon icon={faAngellist} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/nicupop729"
        >
          <FontAwesomeIcon icon={faTwitter} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="skype:live:.cid.b1596767c8ac3f09"
        >
          <FontAwesomeIcon icon={faSkype} color="4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
