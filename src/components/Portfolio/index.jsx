import { v4 as uuidv4 } from 'uuid';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import Project from './project';
import AnimatedLetters from '../AnimatedLetters';
import projects from '../../assets/projects/projects';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const effect = () => setTimeout(() => setLetterClass('text-animate-hover'), 3000);
    effect();
  }, []);

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
        </div>

        <div className="projects-container">
          <ul className="projects-list">
            {projects.map(({
              projectImg, name, description, technologies, liveVersion, gitHubRepo,
            }) => (
              <li key={uuidv4()}>
                <Project
                  image={projectImg}
                  name={name}
                  description={description}
                  technologies={technologies}
                  liveVersion={liveVersion}
                  gitHubRepo={gitHubRepo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
