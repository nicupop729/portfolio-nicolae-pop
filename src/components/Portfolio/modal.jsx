/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';
import { FaRegWindowClose } from 'react-icons/fa';
import './modal.scss';

const Modal = ({
  name,
  image,
  description,
  technologies,
  liveVersion,
  gitHubRepo,
  modalIsOpen,
  onClose,
}) => {
  if (!modalIsOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span>
          <FaRegWindowClose className="close-modul-btn" onClick={onClose} />
        </span>
        <div className="modal-header">
          <h2 className="modal-title">{name}</h2>
        </div>
        <div className="modal-body">
          <div className="inside-div">
            <img className="modal-image" src={image} alt={name} />
            <ul className="modal-technologies">
              <p className="tech-title">Technologies used</p>
              {technologies.map((technology) => (
                <li key={uuidv4()}>{technology}</li>
              ))}
            </ul>
          </div>
          <p className="modal-description">{description}</p>
        </div>
        <div className="modal-footer">
          <a href={liveVersion} target="_blank" rel="noreferrer">
            Live Version
          </a>
          <a href={gitHubRepo} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
