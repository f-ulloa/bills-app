import { Link } from 'react-router-dom';
import '../styles/components/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: '#e3f2fd' }}>
      <Link className="navbar-brand" to="/">Bills App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Enter Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view-accounts">View Accounts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account-charts">Account Charts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
