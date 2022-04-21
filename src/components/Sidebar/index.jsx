import { Link } from 'react-router-dom';
import './index.scss';
import LogoN from '../../assets/images/logo-n.png';

const Sidebar = () => (
  <div className="navbar">
    <Link className="logo" to="/">
      <img src={LogoN} alt="logo" />
    </Link>
  </div>
);

export default Sidebar;
