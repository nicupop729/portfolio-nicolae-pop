/* eslint-disable react/prop-types */
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

export default AnimatedLetters;
