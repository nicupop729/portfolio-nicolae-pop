import { useEffect, useState } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const effect = () => setTimeout(() => setLetterClass('text-animate-hover'), 3000);
    effect();
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m very ambitious Full Stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I&apos;m very confident, naturally curious, and perpetually working
            on improving my skills & knowledge with one line of code at a time.
          </p>
          <p>
            If I need to define myself in one sentence, that would be a
            discoverer, an adventurer, a nature-sights lover, photography
            enthusiast, and tech-obsessed!!!
          </p>
          <div className="about-technologies">
            <h3>I hold good expertise in the following technologies:</h3>
            <div className="about-technologies-list">
              <div>
                <h4>Front-End</h4>
                <ul>
                  <li>HTML & CSS (SCSS)</li>
                  <li>JavaScript (ES6)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>React Router</li>
                  <li>Material UI</li>
                  <li>Testing with Jest & Mocha</li>
                  <li>Webpack</li>
                </ul>
              </div>
              <div>
                <h4>Back-End</h4>
                <ul>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>PostgreSQL</li>
                  <li>RSpec & Capybara</li>
                </ul>
              </div>
              <div>
                <h4>Environment</h4>
                <ul>
                  <li>git</li>
                  <li>npm</li>
                  <li>GitHub</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                  <li>Linters</li>
                  <li>Code Reviews</li>
                  <li>Pair-programming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
