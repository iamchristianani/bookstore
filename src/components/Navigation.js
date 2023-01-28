import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navigation = () => (
  <header className="navBox">
    <Link to="/" className="navTitle">Bookstore CMS</Link>
    <ul className="navLinks">
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <button type="button" className="navIconBtn">
      <FaUser />
    </button>
  </header>
);

export default Navigation;
