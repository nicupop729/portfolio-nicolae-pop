import { Link } from 'react-router-dom';
import './index.scss';

const Sidebar = () => (
  <div className="navbar">
    <Link className="logo" to="/">
      <img src="/images/logo.png" alt="logo" />
    </Link>
  </div>
);

export default Sidebar;
