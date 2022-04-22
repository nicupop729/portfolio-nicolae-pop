import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-n.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['i', 'c', 'o', 'l', 'a', 'e', ' ', 'P', 'o', 'p'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    const effect = () => setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    effect();
  }, []);

  const newLocal = ' ';

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          {newLocal}
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={25}
          />
        </h1>
        <h2>Full Stack Developer / JavaScript - React / Ruby - Rails</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
