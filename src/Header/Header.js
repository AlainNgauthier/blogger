import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () =>
  <header>
      <Link to="/" className="header-logo">Blogger</Link>
  </header>

export default Header;
    