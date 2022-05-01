import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from './modal';
import './project.scss';

const Project = ({
  name,
  image,
  description,
  technologies,
  liveVersion,
  gitHubRepo,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="project">
      <div className="project-container">
        <img className="project-image" src={image} alt={name} />
        <div className="image-on-hover">
          <button
            type="button"
            className="project-button"
            onClick={() => setModalIsOpen(true)}
          >
            See Project
          </button>
        </div>
      </div>
      <Modal
        onClose={() => setModalIsOpen(false)}
        modalIsOpen={modalIsOpen}
        name={name}
        image={image}
        description={description}
        technologies={technologies}
        liveVersion={liveVersion}
        gitHubRepo={gitHubRepo}
      />
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveVersion: PropTypes.string.isRequired,
  gitHubRepo: PropTypes.string.isRequired,
};

export default Project;
