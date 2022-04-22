import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-n.png';
import './index.scss';

const Home = () => {
  const newLocal = ' ';

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          {newLocal}
          I&apos;m
          <img src={LogoTitle} alt="developer" />
          icolae Pop
          <br />
          web developer
        </h1>
        <h2>
          Full Stack Developer / JavaScript - React / Ruby - Rails
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
