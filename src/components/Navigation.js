import { Link } from "react-router-dom";

const Navigation = () => (
  <header className="navBox">
    <h1 className="navTitle">Bookstore</h1>
    <ul className="navLinks">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </header>
);

export default Navigation;