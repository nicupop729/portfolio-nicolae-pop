import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span key={uuidv4()} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
