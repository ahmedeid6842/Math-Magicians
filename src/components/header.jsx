import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <nav className="nav">
    <h1 className="nav-title">Math Magicians</h1>
    <ul className="nav-links">
      <li>
        <Link to="/Math-Magicians/home" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Math-Magicians/calculator" className="nav-item">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/Math-Magicians/quote" className="nav-item">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
